var React = require('react');
const { BrowserRouter, Match, Miss, Link } = require('react-router')


const ActionButton = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-12">
        <Link to={this.props.linkWord}  className="button button-primary block">
          {this.props.text}
        </Link>
        </div>
      </div>
    )
  }
});

module.exports = ActionButton;
