import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './components/form';
import throttle from './components/throttle';

function App(){
    const chu = React.createRef();
    function handleClick(){
       chu.current.yoyo();
    }

    return(
        <div>
           <h1>Hello World!</h1>
           <Form ref={chu}/>
     
           <button onClick={throttle(handleClick, 5000)} style={{color: 'orange'}}>Focus on me</button>
        </div>
    )
}

export default App;