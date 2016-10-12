var React = require('react');

const MessageItem = require('./messageItem')

function MessageList(props) {
    return (
    <main className="chat flex flex-column flex-1 clear">
      {props.messages.map((msg, index) => {
          return <MessageItem key={index} message={msg} />
        })}
    </main>
  )
}

module.exports = MessageList;
