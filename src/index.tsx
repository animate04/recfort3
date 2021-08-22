import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuServices from './components/MenuServices';

import './services/firebase';
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <MenuServices/>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

