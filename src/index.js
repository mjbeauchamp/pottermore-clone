import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';

// Importing our main style sheet that holds all the styling
import './styles/main.css';

ReactDOM.render(
<HashRouter>
    <App />
</HashRouter>
, document.getElementById('root'));
