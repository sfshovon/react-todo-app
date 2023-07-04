import { useState } from 'react';

const useTodoFunctions = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeStatus, setActiveStatus] = useState('all');
  const [showMenu, setShowMenu] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickAdd = () => {
    if (inputValue.trim() !== '') {
      const newTask = { 
        id: Date.now(), 
        name: inputValue, 
        status: 'pending' 
      };
      setTodos((prevTodos) => [...prevTodos, newTask]);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (editingTask) {
        handleSaveEdit(editingTask, editedValue);
      } 
      else {
        handleClickAdd();
      }
    }
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  const handleCheckboxChange = (e, id) => {
    const { checked } = e.target;
    setTodos((prevTodos) => prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: checked ? 'completed' : 'pending' } : todo
    ));
  };

  const handleMenu = (id) => {
    setShowMenu((prevShowMenu) => (prevShowMenu === id ? null : id));
  };

  const handleEdit = (id) => {
    const task = todos.find((todo) => todo.id === id);
    if (task) {
      setEditedValue(task.name);
      setEditingTask(id);
    }
  };

  const handleSaveEdit = (id, editedTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => todo.id === id ? { ...todo, name: editedTask } : todo
    ));
    setEditingTask(null);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeStatus === 'all') {
      return true;
    }
    return todo.status === activeStatus;
  });

  return {
    todos, setTodos, inputValue, setInputValue, activeStatus, setActiveStatus, showMenu, setShowMenu, editingTask, setEditingTask, editedValue, setEditedValue,
    handleInputChange, handleClickAdd, handleKeyPress, handleStatusChange, handleCheckboxChange, handleMenu, handleEdit, handleSaveEdit, handleDelete, filteredTodos
  }
};

export default useTodoFunctions;