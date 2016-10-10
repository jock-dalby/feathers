var React = require('react');

const Header = require('./header')
const ActionButton = require('./actionButton')

const HomePage = React.createClass({
  render: function () {
    return (
        <div>
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <div className="col-12 push-4-tablet col-4-tablet">
              <ActionButton name="login" linkWord="/login" />
              <ActionButton name="signup" linkWord="/sign-up" />
            </div>
          </div>
        </div>
    );
  }
})

module.exports = HomePage;
