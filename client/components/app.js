const React = require('react');
const { BrowserRouter, Match, Miss, Link, Redirect } = require('react-router')

// components
const HomePage = require('./homePage')
const Login = require('./login')
const SignUp = require('./signup')
const ChatApp = require('./chatApp')

// Other modules
const debug = require('debug')('components:app')

var wrapComponent = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
};

const App = React.createClass({
  getInitialState: function () {
    return {
      isAuthenticated: false,
      user: null,
      users: [],
      messages: []
    }
  },

  componentDidMount: function () {
    this.props.api.authenticate()
    .then((res) => {
      debug('authenticated')
      this.setState({ isAuthenticated: true })
    })
    .catch(err => {
      debug('not authenticated')
    })
  },

  login: function (user) {
    return this.props.api.authenticate({
      type: 'local',
      email: user.email,
      password: user.password
    })
    .then(() => {
      debug('authenticated')
        this.setState({ isAuthenticated: true })
        return true
      })
  },

  addMessage: function (newMessage) {
    const message = api.service('message')
    message.create(newMessage)
  },

  addUser: function (newUser) {
    debug('signing up!!!!', newUser)
    const userService = this.props.api.service('/users')
    userService.create(newUser)
    .then((res) => {
      debug('user created ', res)
      {this.login(newUser)}
    })
    .catch(err => {
      debug(err)
    })
  },

  render() {
    const { isAuthenticated } = this.state
    return (
      <BrowserRouter>
        <div>
          {
            isAuthenticated ? (
              <Redirect to="/chatApp" />
            ) : <Match exactly pattern="/" component={HomePage} />
          }
          <Match exactly pattern="/login" component={wrapComponent(Login, { login: this.login })} />
          <Match exactly pattern="/sign-up" component={wrapComponent(SignUp, { addUser: this.addUser})}/>
          {
            isAuthenticated ? (
              <Match pattern="/chatApp" component={wrapComponent(ChatApp, { api: this.props.api})} />
            ) : null
          }
        </div>
      </BrowserRouter>
    )
  }
});

module.exports = App;
