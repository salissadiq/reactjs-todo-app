import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Todos from './components/Todos'
function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, title: "Reading"},
    {id: 2, title: "Eating"},
    {id: 3, title: "Coding"},
  
  ])
  function addTodo({todo}) {
    console.log(todo);
    setTodos(prevTodos =>(
      [
        ...prevTodos,
        {
          id: prevTodos.length,
          title: todo
        }
      ]
    ))
  }

  function  handleDeleteTodo({id}){
    console.log({id});
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    
    <>
      <Header />
      <div className="main--container">
      
      <Form addTodo={addTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
    </>
  );
}

export default App;
