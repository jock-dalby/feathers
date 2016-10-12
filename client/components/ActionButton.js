var React = require('react');
const { Link } = require('react-router')


function ActionButton (props) {
  return (
    <div className="row">
      <div className="col-12">
        <Link to={props.link}  className="button button-primary block" id={props.back}>
          {props.text}
        </Link>
      </div>
    </div>
  )
}



module.exports = ActionButton;
