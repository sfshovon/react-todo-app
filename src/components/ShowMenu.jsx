import React from 'react';
import { FaEllipsisV, FaPen, FaTrash } from 'react-icons/fa';

const ShowMenu = ({ todo, showMenu, handleEdit, handleDelete, handleMenu }) => {
  return (
    <div className="relative">
      <FaEllipsisV
        onClick={() => handleMenu(todo?.id)}
        className="fas fa-ellipsis cursor-pointer"
      />
      {
        showMenu === todo?.id && 
          <div className="absolute -top-6 left-4 flex flex-col items-center gap-2 bg-gradient-to-r from-slate-300 to-slate-400 p-4 rounded-2xl shadow-2xl">
            <FaPen
              onClick={() => handleEdit(todo?.id)}
              className="fas fa-pen cursor-pointer hover:text-cyan-800"
            />
            <FaTrash
              onClick={() => handleDelete(todo?.id)}
              className="fas fa-trash cursor-pointer hover:text-red-700"
            />
          </div>
      }
    </div>
  );
};

export default ShowMenu;