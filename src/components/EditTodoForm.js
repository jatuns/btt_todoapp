import React, { useState, useEffect, useRef } from 'react';

export const EditTodoForm = ({ task, onUpdate }) => {
  const [value, setValue] = useState(task.task);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onUpdate(trimmed);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        ref={ref}
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Update</button>
    </form>
  );
};