/**
 * @providesModule SpeakerIcon
 */

var React = require('React');

var SpeakerIcon = React.createClass({
  render: function() {
    return (
      <div className="speaker-group">
        <img className="speaker-icon" src={this.props.src} />
        <span className="name">{this.props.name}</span>
      </div>
    );
  },
});

module.exports = SpeakerIcon;
