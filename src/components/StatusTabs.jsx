import React from 'react';

const StatusTabs = ({ activeStatus, todos, handleStatusChange, setTodos }) => {
  const checkStatus = (status, label, activeStatus, handleStatusChange) => {
    return (
      <span className={`cursor-pointer ${activeStatus === status ? 'text-blue-500 font-semibold' : '' } `} onClick={() => handleStatusChange(status)}>
        {label}
      </span>
    );
  }

  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-2xl py-2 px-4">
      <div className="flex space-x-2">
      { checkStatus('all', 'All', activeStatus, handleStatusChange) }
      { checkStatus('pending', 'Pending', activeStatus, handleStatusChange) }
      { checkStatus('completed', 'Completed', activeStatus, handleStatusChange) }
      </div>
      <button
        onClick={() => { setTodos([]) }}
        className={`normal-case btn btn-error text-white px-2 hover:text-red-500 rounded-2xl hover:bg-red-100 ${
          todos.length === 0 ? 'hidden' : ''
        }`}
      >
        Clear All
      </button>
    </div>
  );
};

export default StatusTabs;