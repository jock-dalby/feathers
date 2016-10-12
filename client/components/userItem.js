var React = require('react');

const PLACEHOLDER = 'https://placeimg.com/60/60/people';
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

const UserItem = React.createClass({

  render() {
    console.log('user ', this.props.user)
    return (
      <li>
        <a className="block relative" href="#">
          <img src={this.props.user.avatar || PLACEHOLDER} className="avatar" />
          <span className="absolute username">{this.props.user.email}</span>
        </a>
      </li>
    )
  }
});

module.exports = UserItem;
