from fastapi import FastAPI
from server.app.api.v1.endpoints import router as api_v1_router


def create_app() -> FastAPI:
    app = FastAPI(title="Ultron Eye Server")

    app.include_router(api_v1_router, prefix="/api/v1")

    return app
