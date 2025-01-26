from fastapi import APIRouter, HTTPException
from datetime import datetime
import logging
from server.app.api.v1.models import SystemReport
from server.app.db.memory import client_reports
from server.app.core.constants import AI_RELATED_PROCESSES

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/report")
async def receive_report(report: SystemReport):
    """
    Receive and store system reports from clients, filtering for AI-related processes
    """
    logger.info(f"Received report from client: {report.client_id}")

    try:
        # Filter the processes to only include AI-related ones
        filtered_processes = {}  # Use dict to maintain unique processes by name
        for process in report.process_list:
            process_name_lower = process["name"].lower()
            for key in AI_RELATED_PROCESSES:
                if key in process_name_lower:
                    process["category"] = AI_RELATED_PROCESSES[key]
                    # Use process name as key to ensure uniqueness
                    filtered_processes[process_name_lower] = process
                    break

        # Convert filtered processes back to list
        report.process_list = list(filtered_processes.values())

        # Update or add the report in client_reports
        # Find and replace existing report for this client_id
        for i, existing_report in enumerate(client_reports):
            if existing_report.client_id == report.client_id:
                client_reports[i] = report
                break
        else:
            # If no existing report found, append new one
            client_reports.append(report)

        logger.info(f"Successfully stored report for client: {report.client_id}")
        logger.debug(f"Current reports count: {len(client_reports)}")

        return {
            "status": "success",
            "message": f"Report received from {report.client_id}",
            "ai_processes_detected": len(filtered_processes),
        }
    except Exception as e:
        logger.error(f"Error processing report: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/reports/{client_id}")
async def get_client_reports(client_id: str):
    """
    Retrieve reports for a specific client
    """
    logger.info(f"Fetching reports for client: {client_id}")
    logger.debug(f"Total reports in memory: {len(client_reports)}")

    client_data = [r for r in client_reports if r.client_id == client_id]
    if not client_data:
        logger.warning(f"No reports found for client: {client_id}")
        raise HTTPException(status_code=404, detail="No reports found for client")

    logger.info(f"Found {len(client_data)} reports for client: {client_id}")
    return client_data


@router.get("/analytics")
async def get_analytics():
    """
    Get analytics about AI tool usage across the organization
    TODO: This is just v1 implementation. Implement this in a proper way.
    """
    try:
        analytics = {
            "total_clients": len({r.client_id for r in client_reports}),
            "most_used_ai_tools": {},
            "total_processes": 0,
            "usage_by_category": {},
            "average_memory_by_tool": {},
            "average_cpu_by_tool": {},
        }

        # Calculate metrics
        for report in client_reports:
            for process in report.process_list:
                category = process.get("category", "Unknown")
                analytics["usage_by_category"][category] = (
                    analytics["usage_by_category"].get(category, 0) + 1
                )
                analytics["total_processes"] += 1

        return analytics
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/health")
async def health_check():
    """
    Basic health check endpoint
    """
    return {"status": "healthy", "timestamp": datetime.utcnow()}
