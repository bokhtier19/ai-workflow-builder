import {useCallback, useState} from "react";
import ReactFlow, {addEdge, MiniMap, Controls, Background} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
    {
        id: "query",
        type: "default",
        data: {label: "User Query"},
        position: {x: 50, y: 100}
    },
    {
        id: "kb",
        type: "default",
        data: {label: "Knowledge Base"},
        position: {x: 250, y: 100}
    },
    {
        id: "llm",
        type: "default",
        data: {label: "LLM Engine"},
        position: {x: 450, y: 100}
    },
    {
        id: "output",
        type: "default",
        data: {label: "Output"},
        position: {x: 650, y: 100}
    }
];

const initialEdges = [];

function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState(null);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const runWorkflow = async () => {
        const workflow = {};
        nodes.forEach((n) => {
            workflow[n.id] = {label: n.data.label};
        });

        const res = await fetch("http://127.0.0.1:8000/execute", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                query,
                workflow
            })
        });

        const data = await res.json();
        setResponse(data);
    };

    return (
        <div style={{height: "100vh", display: "flex"}}>
            {/*--------------------- Left Panel----------------------- */}
            <div style={{width: 250, padding: 16, borderRight: "1px solid #ddd"}}>
                <h3>Chat</h3>
                <input placeholder="Ask something" value={query} onChange={(e) => setQuery(e.target.value)} style={{width: "100%", padding: 8}} />
                <br />
                <br />
                <button onClick={runWorkflow} disabled={!query}>
                    Run Workflow
                </button>

                <br />
                <br />
                {response && <pre style={{fontSize: 12}}>{JSON.stringify(response, null, 2)}</pre>}
            </div>

            {/*------------------------------ Canvas----------------------- */}
            <div style={{flex: 1}}>
                <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} fitView>
                    <MiniMap />
                    <Controls />
                    <Background />
                </ReactFlow>
            </div>
        </div>
    );
}

export default App;
