import { useEffect, useState } from 'react';
import './App.css';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import type { Task } from './types';

function loadTasks(): Task[] {
  try {
    return JSON.parse(localStorage.getItem('tasks') ?? '[]');
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    setTasks(prev => [...prev, { id: Date.now(), name: trimmed, completed: false }]);
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  function toggleTask(id: number) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  return (
    <main className="container">
      <h1>To Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  );
}

export default App;
