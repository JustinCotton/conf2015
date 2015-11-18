var React = require('React');
var Site = require('Site');
var SpeakerIcon = require('SpeakerIcon');
var H = require('Header');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <div className="hero">
          <div className="wrap">
            <div className="text">
              <strong>React.js Conf</strong>
            </div>
            <div className="minitext">
              January 28 &amp; 29 &mdash; Facebook HQ, CA
            </div>
          </div>
        </div>

        <section className="content wrap">
          <section className="home-section">
            <H level={2}>Videos</H>
            <p>All 2015 conference videos are now posted on the <a href="schedule.html">schedule</a> page.</p>

            <H level={2}>Overview</H>
            <p>Last year we open sourced React and community adoption blew us away.</p>
            <p>React opens a world of new possibilities such as server-side rendering, real-time updates, different rendering targets like svg and canvas...</p>
            <p>We need to rethink how we write applications using one-way data flow, immutable data structures, the full power of JavaScript and languages targeting it...</p>
            <p>Join us at React.js Conf to shape the future of client-side applications!</p>

            <H level={2}>When and Where</H>
            <p>React.js Conf is being held at <a href="https://www.google.com.au/maps/place/Facebook/@37.484765,-122.148549,14z/data=!4m6!1m3!3m2!1s0x808fbc96cc9eae65:0xe4b691264d679dd6!2sFacebook!3m1!1s0x808fbc96cc9eae65:0xe4b691264d679dd6">Facebook HQ</a> in Menlo Park, CA.</p>
            <p>Tickets are $200 with all proceeds being donated to charity.</p>
            <p>The conference will kick off January 28th at 9am and wrap up January 29th at 6pm.</p>
            <p>If you need accommodation, we have preferred rooms available at <a href="http://www.aloftsiliconvalley.com/">Aloft Silicon Valley</a>, which you can <a href="https://www.starwoodmeeting.com/StarGroupsWeb/booking/reservation?id=1411254782&amp;key=911FD70" className="strike">book here</a> (sold-out). Shuttles will be running between Facebook and Aloft.</p>
            <p>More details on our <a href="venue.html">Venue page</a>.</p>

            <H level={2}>Speakers</H>
            <p>These great speakers will be talking at React.js Conf - check the <a href="schedule.html">schedule</a> for details!</p>
            <SpeakerIcon src="img/pete-hunt.jpg" name="Pete Hunt" />
            <SpeakerIcon src="img/david-nolen.jpg" name="David Nolen" />
            <SpeakerIcon src="img/ryan-florence.jpg" name="Ryan Florence" />
            <a href="schedule.html"><SpeakerIcon src="img/sillhouette.jpg" name="... and more!" /></a>

            <H level={3}>Important Dates</H>
            <ul>
              <li className="strike">Monday October 27<sup>rd</sup> 2014: Opening of the Call for Presenters</li>
              <li className="strike">Friday November 21<sup>st</sup> 2014 &mdash; Midnight PST: Closing of the Call for Presenters</li>
              <li className="strike">Friday November 28<sup>th</sup> 2014 &mdash; Noon PST: Schedule &amp; First wave of tickets</li>
              <li className="strike">Friday December 5<sup>th</sup> 2014 &mdash; Noon PST: Second wave of tickets</li>
              <li className="strike">Friday December 12<sup>th</sup> 2014 &mdash; Noon PST: Third and last wave of tickets</li>
              <li><strong>Wednesday &amp; Thursday January 28<sup>th</sup> &amp; 29<sup>th</sup> 2015: Conference</strong></li>
            </ul>

            <H level={3}>Contact</H>
            <p>If you have any question, feel free to reach out the organizer:<br /> Christopher <a href="https://twitter.com/vjeux">@vjeux</a> Chedeau &lt;<a href="mailto:vjeux@fb.com">vjeux@fb.com</a>&gt;</p>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
