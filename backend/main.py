from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any,Dict


class ExecuteRequest(BaseModel):
    query: str
    workflow: Dict[str, Any]


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)


# Health check endpoint
@app.get("/")
def health():
    return {"status": "FastAPI running"}

# Temporary mocked executor
@app.post("/execute")
def execute_workflow(data: ExecuteRequest):
    """
    Temporary mocked executor.
    This proves workflow orchestration.
    """
    return {
        "query_received": data.query,
        "nodes_received": list(data.workflow.keys()),
        "response": f"Mock response for query: '{data.query}'"
    }