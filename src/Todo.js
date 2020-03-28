import React from 'react';

function Todo({todo, markCompleted, index, deleteTodo}){
   return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
       <ul className="list-group">
           <li className="list-group-item" onClick={()=>markCompleted(index)}>{todo.text}</li>
       </ul>
       <button onClick={()=>deleteTodo(index)}>X</button>
   </div>;
}

export default Todo;