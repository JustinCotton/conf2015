var React = require('React');
var Site = require('Site');
var H = require('Header');

var index = React.createClass({
  render: function() {
    return (
      <Site section="venue">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404843.1234449796!2d-122.17317704323565!3d37.558906241939994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96cc9eae65%3A0xe4b691264d679dd6!2sFacebook!5e0!3m2!1sen!2sus!4v1413914443733"
          width="100%"
          height="250"
          frameBorder="0"
          style={{border: 0}}
        />

        <section className="content wrap">
          <section className="venue-section">
            <div style={{ marginTop: 50, width: 720 }}>
              <H level={1}>Venue</H>
              <p>React.js Conf is being held at <a href="https://www.google.com.au/maps/place/Facebook/@37.484765,-122.148549,14z/data=!4m6!1m3!3m2!1s0x808fbc96cc9eae65:0xe4b691264d679dd6!2sFacebook!3m1!1s0x808fbc96cc9eae65:0xe4b691264d679dd6">Facebook HQ</a> in Menlo Park, CA.</p>
              <p>Unless you're a local, we've arranged preferred rooms at <a href="http://www.aloftsiliconvalley.com/">Aloft Silicon Valley</a>, just across the bridge from the conference.</p>
              <p><span className="strike">Rooms are $189 per night - <a href="https://www.starwoodmeeting.com/StarGroupsWeb/booking/reservation?id=1411254782&amp;key=911FD70">Click here to book</a></span> (sold-out). We will be running shuttle buses between the hotel and the conference.</p>
              <p>Please note that Facebook HQ is not accessible by public transport, so if you choose your own accommodation we recommend you also organize a car. Also, if you plan to extend your trip, you may wish to choose more central accommodation for the remainder.</p>
            </div>
            <div className="side-by-side">
              <div>
                <H level={2}>Facebook Headquarters</H>
                <p><img src="img/fbhq2.jpg" width="450" height="300"/></p>
                <p>
                  <strong>
                    1601 Willow Rd<br />
                    Menlo Park, CA 94025<br />
                    United States
                  </strong>
                </p>
                <p><strong><a href="https://www.google.com.au/maps/place/Facebook/@37.484765,-122.148549,14z/data=!4m7!1m4!3m3!1s0x808fbc96cc9eae65:0xe4b691264d679dd6!2sFacebook!3b1!3m1!1s0x808fbc96cc9eae65:0xe4b691264d679dd6">View on Map</a></strong></p>
                <p><strong className="strike"><a href="https://reactjsconf.splashthat.com/?preview">Buy Tickets</a></strong> (sold-out)</p>
              </div>
              <div>
                <H level={2}>Accommodation</H>
                <p><a href="https://www.starwoodmeeting.com/StarGroupsWeb/booking/reservation?id=1411254782&amp;key=911FD70">
                  <img src="img/aloft2.jpg" width="450" height="300" />
                </a></p>
                <p>
                  <strong>
                    8200 Gateway Blvd<br />
                    Newark, CA 94560<br />
                    United States
                  </strong>
                </p>
                <p><strong><a href="https://www.google.com/maps/dir/Facebook,+1601+Willow+Rd,+Menlo+Park,+CA+94025,+United+States/Aloft+Silicon+Valley,+8200+Gateway+Blvd,+Newark,+CA+94560,+United+States/@37.5117361,-122.1193123,13z/data=!4m14!4m13!1m5!1m1!1s0x808fbc96cc9eae65:0xe4b691264d679dd6!2m2!1d-122.148549!2d37.484765!1m5!1m1!1s0x808fbe8a83cf76bb:0xe3ce5fab67eecdbe!2m2!1d-122.061952!2d37.538777!3e0?hl=en">View on Map</a></strong></p>
                <p><strong className="strike"><a href="https://www.starwoodmeeting.com/StarGroupsWeb/booking/reservation?id=1411254782&amp;key=911FD70">Book</a></strong> (sold-out)</p>
              </div>
            </div>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
