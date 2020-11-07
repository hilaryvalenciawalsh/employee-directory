import React from 'react';
import ReactDOM from 'react-dom';
import app from 'app.js';
import * as serviceWorker from 'serviceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();