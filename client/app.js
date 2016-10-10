var React = require('react');

const App = React.createClass({
  render() {
    return (
      <div id="app" className="flex flex-column">
        <header className="title-bar flex flex-row flex-center">
          <div className="title-wrapper block center-element">
            <img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"  alt="Feathers Logo" />
            <span className="title">Chat</span>
          </div>
        </header>
        <ChatApp />
      </div>
    )
  }
});

module.exports = App;
