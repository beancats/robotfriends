// Keep these at the top of the file
import React from 'react'; // <- works because react has webpack 'under the hood' (browerify equivilent)
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import App from './containers/App';

ReactDOM.render(
  <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
