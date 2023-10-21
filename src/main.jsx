import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/north_state_junk/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
