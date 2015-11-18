/**
 * @providesModule Header
 * @jsx React.DOM
 */

var React = require('React');
var slug = require('slug');

var Header = React.createClass({
  render: function() {
    var name = slug(this.props.toSlug || this.props.children);
    var H = 'h' + this.props.level;

    return this.transferPropsTo(
      <H>
        <a className="anchor" name={name}></a>
        {this.props.children}
        {' '}<a className="hash-link" href={'#' + name}>#</a>
      </H>
    );
  }
});

module.exports = Header;
