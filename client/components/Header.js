var React = require('react');

const Header = React.createClass({
  render() {
    return (
      <div className="col-12 col-8-tablet push-2-tablet text-center">
        <img className="logo center-item"
          src="http://feathersjs.com/img/feathers-logo-wide.png"
          alt="Feathers Logo" />
        <h3 className="title">Chat</h3>
      </div>
    )
  }
});

module.exports = Header
