import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';


/*
 * mui branch of tic-tac-toe
 * 
 * To install mui use the following command:
 * 
 * yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
 * 
 * and add the following lines to index.html in the public folder with the other <link> tags.
 * 
 *   <!--
      Roboto font from https://mui.com/getting-started/installation/.
    -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    
    <!--
      Font icons from https://mui.com/getting-started/installation/.
    -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
 * 
*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
