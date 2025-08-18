import { v4 as uuid } from 'uuid';

export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: uuid(), task: action.task, completed: false, isEditing: false },
      ];
    case 'TOGGLE':
      return state.map(t =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    case 'DELETE':
      return state.filter(t => t.id !== action.id);
    case 'START_EDIT':
      return state.map(t =>
        t.id === action.id ? { ...t, isEditing: true } : t
      );
    case 'UPDATE':
      return state.map(t =>
        t.id === action.id ? { ...t, task: action.task, isEditing: false } : t
      );
    default:
      return state;
  }
}