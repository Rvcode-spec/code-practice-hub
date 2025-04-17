"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import "react-quill/dist/quill.snow.css";
import { TodoItem } from "../components/TodoItem";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });



export default function HomePage() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [editingTitle, setEditingTitle] = useState<string>("");
  const [editingText, setEditingText] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);

    if (data.length > 0) {
      setSelectedIndex(0);
      setEditingTitle(data[0].title);
      setEditingText(data[0].description);
    } else {
      setSelectedIndex(-1);
      setEditingTitle("");
      setEditingText("");
    }
  };

  const handleSave = async () => {
    const newTodo: TodoItem = {
      title: editingTitle || "Untitled Task",
      description: editingText,
      date: new Date().toLocaleDateString(),
    };

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    const saved = await res.json();
    const newTodos = [...todos, saved];
    setTodos(newTodos);
    setSelectedIndex(newTodos.length - 1);
    setEditingTitle(saved.title);
    setEditingText(saved.description);
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;

    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    const updated = todos.filter((todo) => todo._id !== id);
    setTodos(updated);

    if (updated.length > 0) {
      setSelectedIndex(0);
      setEditingTitle(updated[0].title);
      setEditingText(updated[0].description);
    } else {
      setSelectedIndex(-1);
      setEditingTitle("");
      setEditingText("");
    }
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedTodo = selectedIndex >= 0 ? todos[selectedIndex] : null;

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="container-fluid">
        <div className="row vh-100">
          {/* Sidebar */}
          <div className="col-3 border-end p-3 bg-white">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              Todo
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  setEditingText("");
                  setEditingTitle("");
                  setSelectedIndex(-1);
                }}
              >
                +
              </button>
            </h4>

            <div className="list-group">
              {filteredTodos.length > 0 ? (
                filteredTodos.map((todo, index) => (
                  <button
                    key={todo._id || index}
                    className={`list-group-item list-group-item-action ${
                      index === selectedIndex ? "active" : ""
                    }`}
                    onClick={() => {
                      const actualIndex = todos.findIndex(
                        (t) => t._id === todo._id
                      );
                      setSelectedIndex(actualIndex);
                      setEditingText(todo.description);
                      setEditingTitle(todo.title);
                    }}
                  >
                    <div className="fw-bold">{todo.title}</div>
                    <small className="text-muted">
                      {todo.description.slice(0, 30)}...
                    </small>
                    <br />
                    <small className="text-secondary">{todo.date}</small>
                  </button>
                ))
              ) : (
                <p className="text-muted mt-3">No todos found.</p>
              )}
            </div>
          </div>

          {/* Main Panel */}
          <div className="col-9 p-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <input
                type="text"
                className="form-control form-control-lg me-3"
                placeholder="Enter task title"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              {selectedTodo && (
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(selectedTodo._id)}
                >
                  🗑️
                </button>
              )}
            </div>

            <div className="mb-3" style={{ height: "300px" }}>
              <ReactQuill
                theme="snow"
                value={editingText}
                onChange={setEditingText}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSave();
                  }
                }}
                placeholder="Write your task and press Enter to save"
                style={{
                  height: "100vh",
                  width: "100%",
                  border: "none",
                }}
                className="custom-quill-editor"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
