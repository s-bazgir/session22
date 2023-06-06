import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './router';

const data=[{name:"sama", code:1,},
            {name: "sahar", code:2,} 
           ]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Fragment>
    <Router pass={data} />
 </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
