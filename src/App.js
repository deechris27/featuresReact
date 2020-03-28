import React, {useState, useEffect} from 'react';
import Todo from './Todo';


function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue(); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo..." onChange={e=>setValue(e.target.value)}/>
        </form>
    )
}



function App(){

    const [todos, setTodos] = useState([
        {
            text: 'Learn React',
            isCompleted: false
        },
        {
            text: 'Meet Lakhan',
            isCompleted: false
        },
        {
            text: 'Visit places',
            isCompleted: false
        }
    ]);

    const addTodo = (text) =>{
      const newTodos = [...todos, {text}];
      setTodos(newTodos);
    };

    const markCompleted = (i)=>{
        const newTodos = [...todos];
        newTodos[i].isCompleted = !todos[i].isCompleted;
        setTodos(newTodos);
    };

    const deleteTodo = (i)=>{
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    };

    return(
        <div>
           {todos.map((todo, i)=>(
              <Todo key={i} todo={todo} markCompleted={markCompleted} index={i} deleteTodo={deleteTodo}/>
           ))}
           <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default App;