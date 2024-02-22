import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/Store';
import "./asest/css/style-prefix.css"
import "./asest/css/style.css"
import "./asest/css/acount.css"

import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    
    </BrowserRouter>
   
  </React.StrictMode>
);

// npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
