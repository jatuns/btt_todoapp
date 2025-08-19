import React, { useState } from 'react';

export const TodoForm = ({ onAdd }) => {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed, 'ACTIVE');
    setValue('');
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <label htmlFor="todo-input" className="sr-only">Task</label>
        <input
          id="todo-input"
          type="text"
          className="todo-input"
          placeholder="What's your plan?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn"> Add Task</button>
      </form>
    </>
  );
};