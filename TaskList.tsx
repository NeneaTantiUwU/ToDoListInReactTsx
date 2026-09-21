import type { Task } from './types';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <ul id="task-list">
      {tasks.map(task => (
        <li key={task.id}>
          <button type="button" className="task-checkbox" onClick={() => onToggle(task.id)}>
            {task.completed ? '✔' : '☐'}
          </button>
          <span style={task.completed ? { textDecoration: 'line-through', opacity: 0.6 } : undefined}>
            {task.name}
          </span>
          <button type="button" onClick={() => onDelete(task.id)}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
