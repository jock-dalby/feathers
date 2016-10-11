const React = require('react');
const { BrowserRouter, Match, Miss, Link } = require('react-router')

// components
const HomePage = require('./homePage')
const Login = require('./login')
const SignUp = require('./signup')

// Other modules
const feathers = require('feathers-client')
const socketio = require('feathers-socketio/client')
const io = require('socket.io-client')

// Setup socket and configure localStorage to store our login token
const socket = io
const api = feathers()
  .configure(feathers.socketio(socket))

const App = React.createClass({
  getInititalState: function () {
    return {
      users: [],
      messages: []
    }
  },
  addMessage: function (newMessage) {
    const message = api.service('message')
    message.create(newMessage)
  },
  addUser: function (newUser) {
    const user = api.service('user')
    user.create(newUser)
  },
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/login" component={Login} />
          <Match pattern="/sign-up" component={SignUp} addUser={this.addUser}/>
        </div>
      </BrowserRouter>
    )
  }
});

module.exports = App;
