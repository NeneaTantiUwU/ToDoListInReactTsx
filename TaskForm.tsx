import { useState } from 'react';
import type { FormEvent } from 'react';

interface TaskFormProps {
  onAdd: (name: string) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
