import React, { useEffect } from 'react';
import useTodoFunctions from '../utils/useTodoFunctions';
import AddTodo from './AddTodo';
import ShowMenu from './ShowMenu';
import StatusTabs from './StatusTabs';
import Todos from './Todos';

const TodoList = () => {
  const { todos, setTodos, inputValue, activeStatus, showMenu, editingTask, editedValue, setEditedValue, handleInputChange, handleClickAdd, handleKeyPress, handleStatusChange, handleCheckboxChange, handleMenu, handleEdit, handleSaveEdit, handleDelete, filteredTodos } = useTodoFunctions();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todo-list'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="mt-12 px-2 w-full md:px-0 md:w-1/3">
      <div className="mb-6">
        <AddTodo
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleClickAdd={handleClickAdd}
          handleKeyPress={handleKeyPress}
        />
      </div>
      <div className="mb-6">
        <StatusTabs
          activeStatus={activeStatus}
          todos={todos}
          handleStatusChange={handleStatusChange}
          setTodos={setTodos}
        />
      </div>
      <ul className="bg-gradient-to-r from-slate-400 to-orange-200 p-4 rounded-2xl">
      {
        filteredTodos.length === 0 ? (
          <span className="text-gray-600 font-bold flex justify-center animate-pulse">
            You do not have any tasks here
          </span>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center mb-2 p-2">
              <Todos 
                todo={todo} 
                handleCheckboxChange={handleCheckboxChange} 
                editingTask={editingTask} 
                editedValue={editedValue} 
                setEditedValue={setEditedValue} 
                handleSaveEdit={handleSaveEdit} 
                handleKeyPress={handleKeyPress}
              />
              <ShowMenu 
                todo={todo} 
                showMenu={showMenu} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete} 
                handleMenu={handleMenu}
              />
            </li>
          ))
        )
      }
      </ul>
    </div>
  );
};

export default TodoList;