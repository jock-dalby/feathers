var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io-client');
var feathers = require('feathers-client');

var ChatApp = require('./components/ChatApp');
var HomePage = require('./components/HomePage')


const socket = io();
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

ReactDOM.render(<HomePage />, document.querySelector('main'));

// app.authenticate().then(() => {
//   ReactDOM.render(<HomePage />, document.querySelector('#main'));
// }).catch(error => {
//   if(error.code === 401) {
//     window.location.href = '/login.html'
//   }
//
//   console.error(error);
// });
