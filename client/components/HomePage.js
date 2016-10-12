var React = require('react');

const Header = require('./header')
const ActionButton = require('./actionButton')

function HomePage () {
  return (
    <main className="home container">
      <div>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-12 push-4-tablet col-4-tablet">
            <ActionButton text="Log in" link="/login" />
            <ActionButton text="Sign up" link="/sign-up" />
          </div>
        </div>
      </div>
    </main>
  )
}

module.exports = HomePage;
