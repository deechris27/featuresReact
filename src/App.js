import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {debounce} from './debounce';

function App(){
    const handleClick = ()=>{
        console.log("yoyooooo");
    }
    return(
        <div>
           <h1>Hello World!</h1>
           <button onClick={debounce(handleClick, 1000)}>Debounce</button>
        </div>
    )
}

export default App;