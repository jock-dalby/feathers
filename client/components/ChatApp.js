const React = require('react');

const UserList = require('./userList')
const MessageList = require('./messageList')
const ComposeMessage = require('./composeMessage')

const ChatApp = React.createClass({
  getInitialState() {
    return {
      users: [],
      messages: []
    };
  },

  componentDidMount() {
    const userService = this.props.api.service('users');
    const messageService = this.props.api.service('messages');

    // Find all users initially
    userService.find()
      .then((page) => this.setState({ users: page.data }));
    // Listen to new users so we can show them in real-time
    userService.on('created', user => this.setState({
      users: this.state.users.concat(user)
    }));

    // Find the last 10 messages
    messageService.find({
      query: {
        $sort: { createdAt: -1 },
        $limit: this.props.limit || 10
      }
    })
    .then(page => this.setState({ messages: page.data.reverse() }));
    // Listen to newly created messages
    messageService.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }));

  },

  sendMessage(message) {
    console.log(message)
    // Get the messages service
    const messageService = this.props.api.service('messages');
    // Create a new message with the text from the input field
    messageService.create(message)
    .then(() => this.setState({ text: '' }));
  },

  render() {
    return <div className="flex flex-row flex-1 clear">
      <UserList users={this.state.users} />
      <div className="flex flex-column col col-9">
        <MessageList users={this.state.users} messages={this.state.messages} />
        <ComposeMessage sendMessage={this.sendMessage}/>
      </div>
    </div>
  }
});

module.exports= ChatApp;
