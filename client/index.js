// Debug Modules
window.thedebug = require('debug')
const debug = require('debug')('index')
thedebug.enable('*')

// React modules
const React = require('react');
const ReactDOM = require('react-dom');

// Other modules
const feathers = require('feathers-client')
const socketio = require('feathers-socketio/client')
const io = require('socket.io-client')

// Components
const App = require('./components/app')

// Setup socket
const socket = io

const api = feathers()
  .configure(feathers.socketio(socket))
  // Use localStorage to store our login token

const message = api.service('message')
// message.on('created', message => console.log('Created a message', message))
message.create({ text: 'Hi!!!'})

ReactDOM.render(<App api={api}/>, document.getElementById('main'));

// app.authenticate().then(() => {
//   ReactDOM.render(<HomePage />, document.querySelector('#main'));
// }).catch(error => {
//   if(error.code === 401) {
//     window.location.href = '/login.html'
//   }
//
//   console.error(error);
// });
