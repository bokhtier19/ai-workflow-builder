# AI Workflow Builder (MVP)

A **no-code visual workflow builder** that enables users to create and execute AI-powered workflows through an intuitive drag-and-drop interface. Users connect modular components (User Query, Knowledge Base, LLM Engine, Output) to define intelligent workflows, then execute them via a chat interface.

## Project Focus

This MVP demonstrates **core workflow orchestration and system architecture** with clear extension points for advanced AI features. The focus is on:

-   Clean frontend-backend integration
-   Visual workflow composition
-   Execution pipeline orchestration
-   Scalable architecture

---

## Tech Stack

**Frontend:** React (Vite), React Flow, JavaScript
**Backend:** FastAPI, Python
**Communication:** REST API with CORS

---

## Key Features

-   **Visual Workflow Builder** - Drag-and-drop canvas powered by React Flow
-   **Component Connection** - Visually link workflow steps
-   **Workflow Validation** - Pre-execution graph validation
-   **Execution Pipeline** - Orchestrated component processing
-   **Chat Interface** - User-friendly query submission
-   **API Documentation** - Interactive Swagger UI at `/docs`

---

## Workflow Execution Flow

```
User Query → Knowledge Base (optional) → LLM Engine → Output
```

1. User builds workflow visually on canvas
2. User submits query via chat interface
3. Frontend serializes workflow and sends to backend
4. Backend executes components in sequence
5. Response returned and displayed

---

## Quick Start

### Backend Setup

```bash
cd backend
source venv/Scripts/activate  # Windows Git Bash
# Use 'source venv/bin/activate' on macOS/Linux
python -m uvicorn main:app --reload
```

**Backend URL:** `http://127.0.0.1:8000`
**Swagger UI:** `http://127.0.0.1:8000/docs`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

**Frontend URL:** `http://localhost:5173`

---

## API Reference

### `POST /execute`

Executes a workflow with user input.

**Request:**

```json
{
  "query": "Explain this workflow",
  "workflow": {
    "query": {},
    "kb": {},
    "llm": {},
    "output": {}
  }
}
```

**Response:**

```json
{
  "workflow_steps": ["query", "kb", "llm", "output"],
  "final_response": "Executed workflow with steps: query → kb → llm → output"
}
```

---

## Demo Highlights

The included screen recording demonstrates:

-   Visual workflow creation using React Flow
-   Component connection and graph building
-   Query submission via chat interface
-   End-to-end frontend-backend communication
-   API execution through Swagger UI

---

## Future Enhancements

**AI Integration:**

-   Knowledge Base with PDF upload and vector search
-   OpenAI/Gemini embeddings
-   Live LLM response generation

**Features:**

-   Node configuration panel with parameters
-   Workflow persistence and templates
-   Chat history management
-   User authentication and authorization
-   Dockerized deployment

**UI/UX:**

-   Advanced node customization
-   Real-time execution visualization
-   Error handling and retry logic
-   Workflow analytics

---

## Architecture Philosophy

This project prioritizes:

-   **Clear separation of concerns** - Frontend/Backend modularity
-   **Extensibility** - Easy integration of new components
-   **Correct orchestration** - Reliable workflow execution
-   **Clean codebase** - Maintainable and well-structured

Advanced AI features are intentionally stubbed to focus on the **execution pipeline foundation**, which supports seamless integration without architectural changes.

---

## Project Structure

```
ai-workflow-builder/
├── frontend/          # React + Vite + React Flow
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/           # FastAPI + Python
│   ├── main.py
│   ├── requirements.txt
│   └── venv/
└── README.md
```

---

## Conclusion

This MVP establishes a **production-ready foundation** for a no-code AI workflow builder. The architecture supports full AI integration, document processing, and enterprise features while maintaining clean code and clear extensibility.

**Ready for deployment and scaling.**
