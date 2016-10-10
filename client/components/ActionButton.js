var React = require('react');

const ActionButton = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-12">
        <a href={this.props.name + '.html'} className="button button-primary block">
          {this.props.text}
        </a>
        </div>
      </div>
    )
  }
});

module.exports = ActionButton;
