import React, { useReducer, useEffect, useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { todoReducer } from '../reducer';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const [persisted, setPersisted] = useLocalStorage('todos', []);
  const [state, dispatch] = useReducer(todoReducer, persisted);

  // sync to localStorage
  useEffect(() => {
    setPersisted(state);
  }, [state, setPersisted]);

  const [filter, setFilter] = useState('all'); // all|active|completed
  const visibleTodos = useMemo(() => {
    if (filter === 'active') return state.filter(t => !t.completed);
    if (filter === 'completed') return state.filter(t => t.completed);
    return state;
  }, [state, filter]);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>

      <TodoForm onAdd={(task) => dispatch({ type: 'ADD', task })} />

      <div className="filter-container">
        <button
          type="button"
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        </div>

      {visibleTodos.length === 0 && <p>No tasks yet 🚀</p>}

      {visibleTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            task={todo}
            onUpdate={(task) =>
              dispatch({ type: 'UPDATE', task, id: todo.id })
            }
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            onToggle={() => dispatch({ type: 'TOGGLE', id: todo.id })}
            onDelete={() => dispatch({ type: 'DELETE', id: todo.id })}
            onEdit={() => dispatch({ type: 'START_EDIT', id: todo.id })}
          />
        )
      )}
    </div>
  );
};