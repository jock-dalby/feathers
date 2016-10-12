var React = require('react');

const PLACEHOLDER = 'https://placeimg.com/60/60/people';
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

function UserItem (props) {

  return (
    <li>
      <a className="block relative" href="#">
        <img src={props.user.avatar || PLACEHOLDER} className="avatar" />
        <span className="absolute username">{props.user.email}</span>
      </a>
    </li>
  )
}


module.exports = UserItem;
