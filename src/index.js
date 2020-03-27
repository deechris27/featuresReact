import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
const renderApp = (Component)=>{
   return ReactDOM.render(
     <Component />,
     rootElement)
};

renderApp(App);

