from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Dict, Optional

class OrganizationInfo(BaseModel):
    id: str
    name: str
    email: Optional[EmailStr] = None
    description: Optional[str] = None
    location: Optional[str] = None

class UserInfo(BaseModel):
    user_id: str
    username: str
    email: Optional[EmailStr] = None
    department: Optional[str] = None
    role: Optional[str] = None
    location: Optional[str] = None

class PlatformInfo(BaseModel):
    platform: str
    platform_release: str
    machine: str
    processor: str
    cpu_cores: int
    memory_total: int
    memory_available: int

class AIProcess(BaseModel):
    name: str
    category: str
    status: str
    pid: int
    memory_usage: float
    cpu_usage: float
    description: str

class EditorPluginProcess(BaseModel):
    name: str
    category: str
    status: str
    pid: int
    memory_usage: float
    cpu_usage: float
    description: str


class SystemReport(BaseModel):
    client_id: str
    organization_id: str
    user_id: str
    platform_info: PlatformInfo
    ai_processes: List[AIProcess]
    editor_plugins: List[EditorPluginProcess]
    