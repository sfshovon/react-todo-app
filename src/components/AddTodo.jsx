import React from 'react';
import { FaBars } from 'react-icons/fa';

const AddTodo = ({ inputValue, handleInputChange, handleClickAdd, handleKeyPress }) => {
  return (
    <div className="flex justify-between items-center gap-4 py-4 px-6 rounded-2xl bg-gray-100">
      <div className="relative">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <FaBars/>
        </span>
        <input
          type="text"
          placeholder="Add A New Task"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="w-full pl-10 py-2 border rounded-lg outline-none focus:border-blue-500"
        />
      </div>
      <button className="normal-case btn btn-success text-white rounded-2xl focus:outline-none hover:bg-blue-600" onClick={handleClickAdd} >
        Add
      </button>  
    </div>
  );
};

export default AddTodo;