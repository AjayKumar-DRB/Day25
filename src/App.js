import './App.css';
import React, { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const addTodo = (taskName, taskDescription) => {
    const newTodo = {
      id: todo.length,
      name: taskName,
      description: taskDescription,
      status: 'notCompleted'
    }
    setTodo([...todo, newTodo]);
  }

  const filteredTodo = todo.filter((todo) => {
    if (filterStatus === 'all') return true;
    return todo.status === filterStatus;
  })

  const updateStatus = (id, status) => {
    const updatedTodos = todo.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodo(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className='title mb-5 mt-2'>My Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <TodoList todos={filteredTodo} deleteTodo={deleteTodo} updateStatus={updateStatus} />
    </div>
  );
}

export default App;
