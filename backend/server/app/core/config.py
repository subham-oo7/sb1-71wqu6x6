from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Ultron Eye Server"
    PORT: int = 8000
    SERVER_URL: str = f"http://localhost:{PORT}"
    CLIENT_ID: str = "1234567890"
    VERSION: str = "1.0.0"
    ORGANIZATION_ID: str = "001"
    DEBUG: bool = True

    class Config:
        case_sensitive = True


settings = Settings()
