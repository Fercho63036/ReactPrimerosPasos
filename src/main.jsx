import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from "./CounterApp";
// import { FirstApp } from "./FirstApp";
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola, soy el Calvo con Capa" subTitle={ 123 }/> */}
        <CounterApp value={ 0 }/>
    </React.StrictMode>
);

