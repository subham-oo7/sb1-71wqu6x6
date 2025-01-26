import uvicorn
from server.app import create_app
from server.app.core.config import settings

app = create_app()

if __name__ == "__main__":
    uvicorn.run(
        "main:app", host=settings.SERVER_URL, port=settings.PORT, reload=settings.DEBUG
    )
