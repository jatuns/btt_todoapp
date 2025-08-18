import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`} role="listitem">
      <span onClick={onToggle}>
        {task.completed ? <FontAwesomeIcon icon={faCheck} /> : null}
        {task.task}
      </span>
      <div className="actions">
          <button className="filter-btn" onClick={onToggle}>
              {task.completed ? 'Undo' : 'Complete'}
          </button>
          <i className="fas fa-edit edit-icon" onClick={onEdit}></i>
          <i className="fas fa-trash delete-icon" onClick={onDelete}></i>
      </div>
    </div>
  );
};