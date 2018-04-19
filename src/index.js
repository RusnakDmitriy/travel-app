import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
