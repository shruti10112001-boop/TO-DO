import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // ✅ Add Todo
  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // ❌ Delete Todo
  const deleteTodo = (id) => {
    console.log("deleteTodo");
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  };

  // ✅ Toggle Complete
  const toggleTodo = (id) => {
    console.log("toggletodo");
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );

    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleTodo(t.id)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>

            <button onClick={() => deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
