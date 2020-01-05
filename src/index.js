import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const domNode = document.getElementById('root');
// Opt into Concurrent Mode.
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
