import React from 'react';

const Todos = ({ todo, handleCheckboxChange, editingTask, editedValue, setEditedValue, handleSaveEdit, handleKeyPress }) => {
  return (
    <label htmlFor={`task-${todo.id}`} className="flex items-center">
      <input
        type="checkbox"
        id={`task-${todo.id}`}
        checked={todo.status === 'completed'}
        onChange={(event) => handleCheckboxChange(event, todo.id)}
        className="mr-2"
      />
      {
        editingTask === todo.id ? (
          <input
            type="text"
            value={editedValue}
            onChange={(event) => setEditedValue(event.target.value)}
            onBlur={() => handleSaveEdit(todo.id, editedValue)}
            onKeyDown={handleKeyPress}
            className="w-full p-2 border rounded-lg outline-none focus:border-blue-500"
          />
      ) : (
        <p className={`mr-4 ${todo.status === 'completed' ? 'line-through' : ''}`}>
          {todo.name}
        </p>
      )}
  </label>
  );
};

export default Todos;