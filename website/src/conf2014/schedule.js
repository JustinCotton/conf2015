var H = require('Header');
var React = require('React');
var ScheduleItem = require('ScheduleItem');
var Site = require('Site');
var Speakers = require('Speakers');

var data = require('data');
var slug = require('slug');


var index = React.createClass({
  displaySlot: function(key, time, day) {
    var talk = data.talks[key];
    if (!talk || !talk.display) {
      return;
    }
    var desc = talk.description;
    if (Array.isArray(desc)) {
      desc = desc.map((d) => <p>{d}</p>);
    } else {
      desc = <p>{desc}</p>;
    }
    var video;
    if (talk.youtube_id) {
      video = (
        <iframe width="720" height="405"
          src={'https://www.youtube.com/embed/' + talk.youtube_id}
          frameBorder="0"
          style={{display: 'block', margin: '20px auto'}}
          allowFullScreen />
      );
    }
    this.talks.push(
      <div key={key} className="talk">
        {talk.speakers && talk.speakers
          .map((speaker) => <img
            src={'img/' + slug(speaker) + '.jpg'}
            className="profile-picture"
          />)}
        <H level={4} style={{marginTop: 40}}>{talk.title}</H>
        {talk.speakers && <h3 style={{marginTop: -17, marginBottom: -10}}><small>by <Speakers speakers={talk.speakers} /></small></h3>}
        <h3 style={{marginTop: -17, marginBottom: -10}}><small>{day}, {time}</small></h3>
        <div className="description">{desc}{video}</div>
      </div>
    );
  },

  render: function() {
    var rows = [];
    data.schedule.forEach(function(i) {
      rows.push(
        <tr className={i.special ? 'special' : undefined} key={i.time}>
          <td className="time">{i.time}</td>
          <ScheduleItem content={i.talks[0]} />
          <ScheduleItem content={i.talks[1]} />
        </tr>
      );
    });
    var talks = this.talks = [];
    this.talks.push(<H level={1} className="schedule-header">Day 1</H>);
    data.schedule.forEach((s) => this.displaySlot(s.talks[0], s.time, "Wednesday"));
    this.talks.push(<H level={1} className="schedule-header">Day 2</H>);
    data.schedule.forEach((s) => this.displaySlot(s.talks[1], s.time, "Thursday"));
    return (
      <Site section="schedule">
        <div className="hero">
          <div className="wrap">
            <div className="text">
              <strong>Schedule</strong>
            </div>
            <div className="minitext">
              January 28 &amp; 29 &mdash; Facebook HQ, CA
            </div>
          </div>
        </div>
        <section className="content wrap">
          <section className="venue-section">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th width="120"></th>
                  <th width="290">Wednesday</th>
                  <th width="290">Thursday</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
            <div className="schedule-talks">
              {talks}
            </div>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
