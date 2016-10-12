// Debug Modules
window.thedebug = require('debug')
const debug = require('debug')('index')
thedebug.enable('*')

// Modules
const domready = require('domready')

const feathers = require('feathers-client') // fetahers-client
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');

// React modules
const React = require('react');
const ReactDOM = require('react-dom');

// Components
const App = require('./components/app')

// Establish a Socket.io connection
const socket = io()

const api = feathers()
  // .configure(feathers.socketio(socket))
  .configure(feathers.rest('http://localhost:3030').fetch(fetch))
  // Use localStorage to store our login token
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }))

domready(() => {
  ReactDOM.render(
    <App api={api}/>, document.getElementById('main'));
})
