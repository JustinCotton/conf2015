/**
 * @providesModule Speakers
 * @jsx React.DOM
 */

var React = require('React');

var Speakers = React.createClass({
  render: function() {
    var results = [];

    for (var i = 0; i < this.props.speakers.length; ++i) {
      var speaker = this.props.speakers[i];
      results.push(speaker);
      if (i === this.props.speakers.length - 1) {
        // do nothing
      } else if (i === this.props.speakers.length - 2) {
        results.push(' and ');
      } else {
        results.push(', ');
      }
    }

    return <span>{results}</span>;
  }
});

module.exports = Speakers;
