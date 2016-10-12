var React = require('react');
var moment = require('moment');

// A placeholder image and anonymous user if the message does not have that information.
const PLACEHOLDER = 'https://placeimg.com/60/60/people';
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

function MessageItem (props) {

  const message = props.message
  const sender = message.sentBy || dummyUser

  return (
    <div className="message flex flex-row">
      <img src={sender.avatar || PLACEHOLDER} alt={sender.email} className="avatar" />
      <div className="message-wrapper">
        <p className="message-header">
          <span className="username font-600">{sender.email}</span>
          <span className="sent-date font-300">{moment(message.createdAt).format('MMM Do, hh:mm:ss')}</span>
        </p>
        <p className="message-content font-300">
          {message.text}
        </p>
      </div>
    </div>
  )
}


module.exports = MessageItem;
