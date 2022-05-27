import React from 'react';
import {FaTimes} from 'react-icons/fa';

export default function Todos({todos, onDeleteTodo}){
    const todosElements = todos.map(todo =>(
        <div key={todo.id} className="todo">
            <h3 >{todo.title} <FaTimes  style={{color: 'red'}} onClick={()=>onDeleteTodo(todo) } /> </h3>
        </div>
    ))
   return (
    <div >
        {todosElements}
    </div>
   )
}