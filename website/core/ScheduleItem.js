/**
 * @providesModule ScheduleItem
 * @jsx React.DOM
 */

var React = require('React');
var Speakers = require('Speakers');
var slug = require('slug');

var data = require('data');

var ScheduleItem = React.createClass({
  render: function() {
    var talk = data.talks[this.props.content];
    if (!talk) {
      return (
        <td>
          <div className="session">{this.props.content}</div>
        </td>
      );
    }

    var name = slug(talk.title);
    var title = talk.display ? <a href={'#' + name}>{talk.title}</a> : talk.title;
    if (talk.speakers) {
      return (
        <td>
          <div className="session">
            {title}
          </div>
          <div className="speaker">
            <Speakers speakers={talk.speakers} images={true} />
          </div>
        </td>
      );
    }

    return (
      <td>
        <div className="session">{title}</div>
      </td>
    );
  }
});

module.exports = ScheduleItem;
