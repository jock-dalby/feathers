var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header')
var ActionButton = require('./ActionButton')

const HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-12 push-4-tablet col-4-tablet">
            <ActionButton name="login" text="Login" />
            <ActionButton name="signup" text="Sign up" />
          </div>
        </div>
      </div>
    );
  }
})

module.exports = HomePage;
