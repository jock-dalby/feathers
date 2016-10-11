const React = require('react');
const { BrowserRouter, Match, Miss, Link } = require('react-router')

// components
const HomePage = require('./homePage')
const Login = require('./login')
const SignUp = require('./signup')

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
  getInititalState: function () {
    return {
      isAuthenticated: false,
      user: null,
      users: [],
      messages: []
    }
    this.addUser = this.addUser.bind(this)
    this.login = this.login.bind(this)
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
    this.setState({authenticated: true})
  },

  addMessage: function (newMessage) {
    const message = api.service('message')
    message.create(newMessage)
  },

  addUser: function (newUser) {
    const userService = this.props.api.service('user')
    userService.create(newUser)
    .then((res) => {
      debug('user created ', (res))
    })
    .catch(err => {
      debug(err)
    })
  },

  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/login" component={wrapComponent(Login, { login: this.login})} />
          <Match pattern="/sign-up" component={wrapComponent(SignUp, { addUser: this.addUser})}/>
        </div>
      </BrowserRouter>
    )
  }
});

module.exports = App;
