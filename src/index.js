import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';
import data from './api.json';

const app = document.getElementById('root')

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<Change  /> ,root)