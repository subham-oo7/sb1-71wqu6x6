from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Dict, Optional


class UserInfo(BaseModel):
    username: str
    email: Optional[EmailStr] = None
    department: Optional[str] = None
    role: Optional[str] = None
    location: Optional[str] = None


class SystemReport(BaseModel):
    client_id: str
    report_id: str
    timestamp: datetime
    version: str
    user_info: UserInfo
    organization_id: Optional[str] = None
    system_info: Dict
    process_list: List[Dict]
    tags: List[str]
    environment: str
    uptime: float
    last_boot_time: datetime
    editor_extensions: Dict
