var React = require('react');

const SignUp = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: ''
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.addUser(this.state)
    this.setState({email: '', password: ''})
  },

  handleEmail: function (e) {
    this.setState({email: e.target.value})
  },

  handlePassword: function (e) {
    this.setState({password: e.target.value})
  },

  render: function () {
    return (
      <main className="login container">
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet text-center">
            <h1 className="font-100">Create an Account</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop text-center">
            <form className="form" method="post" action="/login" onSubmit={this.handleSubmit}>
              <fieldset>
                <input className="block" type="email" name="email" placeholder="email" onChange={this.handleEmail} />
              </fieldset>
              <fieldset>
                <input className="block" type="password" name="password" placeholder="password" onChange={this.handlePassword}  />
              </fieldset>
              <button type="submit" className="button button-primary block signup">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
})

module.exports = SignUp
