var React = require('react');

const MessageItem = require('./messageItem')

const MessageList = React.createClass({

  render() {
    return (
    <main className="chat flex flex-column flex-1 clear">
      {this.props.messages.map((msg, index) => {
          return <MessageItem key={index} message={msg} />
        })}
    </main>
  )
  }
});

module.exports = MessageList;
