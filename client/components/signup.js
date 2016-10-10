var React = require('react');

const SignUp = React.createClass({
  render: function () {
    return (
      <h1>Hello I am Signup</h1>
      //   <div className="row">
      //     <div className="col-12 col-6-tablet push-3-tablet text-center">
      //       <h1 className="font-100">Create an Account</h1>
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop text-center">
      //       <form className="form" method="post" action="/signup">
      //         <fieldset>
      //           <input className="block" type="email" name="email" placeholder="email">
      //         </fieldset>
      //         <fieldset>
      //           <input className="block" type="password" name="password" placeholder="password">
      //         </fieldset>
      //         <button type="submit" className="button button-primary block signup">
      //           Signup
      //         </button>
      //       </form>
      //     </div>
      //   </div>
    );
  }
})

module.exports = SignUp
