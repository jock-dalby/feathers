var React = require('react');

const ComposeMessage = React.createClass({
  getInitialState() {
    return { text: '' };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.sendMessage(this.state)
    this.setState({ text: '' })
  },

  updateText(ev) {
    this.setState({ text: ev.target.value });
  },

  render() {
    return <form className="flex flex-row flex-space-between"
        onSubmit={this.handleSubmit}>
      <input type="text" name="text" className="flex flex-1"
        value={this.state.text} onChange={this.updateText} />
      <button className="button-primary" type="submit">Send</button>
    </form>;
  }
});

module.exports = ComposeMessage;
