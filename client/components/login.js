var React = require('react');

const ActionButton = require('./actionButton')

const Login = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: '',
      error: false
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.login(this.state)
    .then(() => {
      this.setState({email: '', password: ''})
    })
    .catch(err => {
      this.setState({error: true})
    })
  },

  handleEmail: function (e) {
    this.setState({email: e.target.value})
  },

  handlePassword: function (e) {
    this.setState({password: e.target.value})
  },
  render: function () {
    const { error } = this.state
    return (
      <main className="login container">
        <div className="login row">
          <div className="col-12 col-6-tablet push-3-tablet text-center">
            <h1 className="font-100">Welcome Back</h1>
            { error ? (<p>Sorry, it appears either your email or password is incorrect. Please try again!</p>) : ""}
          </div>
        </div>
        <div style={{ marginTop: -20}}className="row">
          <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop text-center">
            <form className="form" method="post" action="/" onSubmit={this.handleSubmit}>
              <fieldset>
                <input className="block" type="email" name="email" placeholder="email" onChange={this.handleEmail} />
              </fieldset>
              <fieldset>
                <input className="block" type="password" name="password" placeholder="password" onChange={this.handlePassword} />
              </fieldset>
              <button type="submit" className="button button-primary block login">
                Login
              </button>
              <ActionButton back="back" text="Sign up" link="/sign-up" />
            </form>
          </div>
        </div>
      </main>
    );
  }
})

module.exports = Login
