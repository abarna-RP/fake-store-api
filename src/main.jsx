
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use client API
import './index.css'; // Or your main CSS file
import App from './App'; // Your main App component

// Get the root element (usually <div id="root"></div> in index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <React.StrictMode> {/* For development mode checks */}
    <App />
  </React.StrictMode>
);
