import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import AllTodo from './components/AllTodo';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  // making the id unique  changing the value of todo with help of setTodo which will get appended in setTodos spread operater kept the previous value and also adding all the the newly created unique id value
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo List App</h1>
        <TodoForm  handleSubmit={handleSubmit} todo={todo} setTodo = {setTodo} editId={editId}/>
        <AllTodo todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
