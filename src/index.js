import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landing from './components/Landing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Contact } from './components/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
);