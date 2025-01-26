from pydantic_settings import BaseSettings
from typing import Optional
import logging

logger = logging.getLogger(__name__)

class ClientSettings(BaseSettings):
    SERVER_URL: str = "http://localhost:8000"
    USERNAME: Optional[str] = None
    PASSWORD: Optional[str] = None
    ORGANIZATION_ID: str = "001"
    VERSION: str = "1.0.0"
    REPORT_INTERVAL: int = 30

    class Config:
        env_prefix = "ULTRON_"
        case_sensitive = True

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        logger.info(f"Loaded settings - Username: {self.USERNAME}, Server URL: {self.SERVER_URL}")

settings = ClientSettings() 