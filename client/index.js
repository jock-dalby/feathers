// Debug Modules
window.thedebug = require('debug')
const debug = require('debug')('index')
thedebug.enable('*')

// React modules
const React = require('react');
const ReactDOM = require('react-dom');

// Components
const App = require('./components/app')

ReactDOM.render(<App />, document.getElementById('main'));

// app.authenticate().then(() => {
//   ReactDOM.render(<HomePage />, document.querySelector('#main'));
// }).catch(error => {
//   if(error.code === 401) {
//     window.location.href = '/login.html'
//   }
//
//   console.error(error);
// });
