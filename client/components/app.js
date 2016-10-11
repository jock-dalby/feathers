const React = require('react');
const { BrowserRouter, Match, Miss, Link } = require('react-router')

// components
const HomePage = require('./homePage')
const Login = require('./login')
const SignUp = require('./signup')

const App = React.createClass({
  getInititalState: function () {
    return {
      users: [],
      messages: []
    }
  },
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/login" component={Login} />
          <Match pattern="/sign-up" component={SignUp} />
        </div>
      </BrowserRouter>
    )
  }
});

module.exports = App;
