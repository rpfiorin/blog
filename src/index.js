import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Disponibiliza BS
import './include/bootstrap';
// Importa classe de rota
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(    // Tambem funciona como container
    <BrowserRouter>
        {/* Ativa rotas no componente raiz (que invoca todos os demais dentro dele)*/}
        <App/>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
