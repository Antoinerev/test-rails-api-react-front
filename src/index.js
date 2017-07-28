import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
// import {BodyContent} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<BodyContent />, document.getElementById('test'));

registerServiceWorker();
