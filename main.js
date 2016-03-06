/**
 * This is the main file
 * Here we'll import react, react dom and our "App" file
 * Then, we'll render our first component! (written inside App.js)
 * The component will be rendered in a div with id "app"
 * @author @derrickroccka
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
ReactDOM.render(<App cat={5} txt="this is the props value" />, document.getElementById('app'));