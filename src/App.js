import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './components/Alert';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 } from 'uuid'
// const appTodoList = [
//   { id: v4(), title: 'learning js', info: "all day need to learn" },
//   { id: v4(), title: 'learning node js', info: "2 day need to learn" },
//   { id: v4(), title: 'learning css', info: "1 day need to learn" },
// ]
const appTodoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
function App() {

  // *** state values 
  const [todos, setTodo] = useState(appTodoList)
  // *** add single title
  const [title, setTitle] = useState('')
  // *** add single info
  const [info, setInfo] = useState('')
  // *** add single alert
  const [alert, setAlert] = useState({ show: false })
  //  add single edit
  const [edit, setEdit] = useState(false)
  //  add single edit item
  const [id, setId] = useState(0)
  // ***useEffect
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  // *** functionality
  const titleHandler = (event) => {
    setTitle(event.target.value)
  }
  const infoHandler = (event) => {
    setInfo(event.target.value)
  }
  const alertHandler = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 5000);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (title !== "" && info !== "") {
      if (edit) {
        let newTodo = todos.map(item => {
          return item.id === id ? { ...item, title, info } : item;
        });
        setTodo(newTodo);
        setEdit(false);
        alertHandler({ type: 'success', text: 'your todo edit in list' })
      } else {
        const newTodos = { id: v4(), title, info };
        setTodo([...todos, newTodos]);
        alertHandler({ type: 'success', text: 'your todo add in list' })
      }
      setTitle('');
      setInfo('');
    } else {
      alertHandler({ type: "danger", text: `plz enter title and information ` })
    }
  }
  // clear all
  const clearAlltodolist = () => {
    setTodo([]);
  }
  // clear or delet todo
  const deletHandler = (id) => {
    let newtodo = todos.filter(item => item.id !== id)
    setTodo(newtodo)
    alertHandler({ type: 'danger', text: "you todo is deleted" })
  }
  // edit todo list 
  const editHandler = (id) => {
    let todo = todos.find(item => item.id === id);
    let { title, info } = todo;
    setTitle(title);
    setInfo(info);
    setEdit(true);
    setId(id)
  }


  return (
    <div className='container'>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1 className='text-center m-4'> Todo List Manager</h1>
      <div className='main'>
        <TodoForm title={title} info={info} titleHandler={titleHandler} infoHandler={infoHandler} submitHandler={submitHandler} edit={edit} />
        <TodoList todos={todos} clearAlltodolist={clearAlltodolist}
          deletHandler={deletHandler}
          editHandler={editHandler}
        />
      </div>
    </div>
  );
}

export default App;
