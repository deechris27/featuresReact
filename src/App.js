import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Fileupload} from './components/Fileupload';

function App(){
    // let serverData;
    // axios.get('http://localhost:5000/yoyo').then(res=> console.log(res.data));

    return(
        <div className="container mt-4">
           <h4 className="display-4 text-center mb-4">
               <i className="fab fa-react" /> React File Upload
           </h4>
           <Fileupload />
        </div>
    )
}

export default App;