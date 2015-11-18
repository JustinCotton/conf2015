var React = require('React');
var Site = require('Site');
var H = require('Header');

var index = React.createClass({
  render: function() {
    return (
      <Site section="info">
        <section className="content wrap">
          <section className="venue-section">
            <div style={{ margin: '40px auto', width: 720 }}>
              <p>We are excited to have you join us! Below are some important details that you need to know before the conference:</p>

              <H level={1}>Location</H>
              <p>Facebook Headquarters<br />
              1 Hacker Way, BUILDING 18<br />
              Menlo Park, CA 94063</p>

              <H level={1}>On-Site Registration</H>
              <p>Registration will take place each day between 9am-10am onsite at Facebook. The unusual part is that we will be collecting badges on Wednesday evening before you leave campus and will give them back on Thursday morning. After the conference on Thursday, you are free to keep your badge/lanyard.</p>
              <p><em>Please note that you must absolutely be on the list in order to join us. We will be checking ID’s. If you are transferring your ticket, you must change the name on the ticket in order for that person to get in.</em></p>

              <H level={1}>Transportation and Parking</H>
              <p>Parking will be tight on campus as we expect a lot more cars than usual due to the conference. We have a number of transportation and parking options that you can utilize.</p>
              <H level={3}>Caltrain</H>
              <p>Facebook has an employee shuttle that runs from Palo Alto Caltrain and our campus. You will need to show them your React.js Conf confirmation email to the driver to get on.</p>
              <p>Schedule from Caltrain to Facebook – meet on Alma side in the green zone, look for a sign in the window with “MPK”.</p>
              <ul>
              <li>Departs 8:31am —> arrival @ Facebook 9:01am</li>
              <li>Departs 8:42am —> arrival @ Facebook 9:12am</li>
              <li>Departs 8:56am —> arrival @ Facebook 9:26am</li>
              <li>Departs 9:08am —> arrival @ Facebook 9:33am</li>
              <li>Departs 9:23am —> arrival @ Facebook 9:48am</li>
              <li>Departs 9:31am —> arrival @ Facebook 9:56am</li>
              </ul>
              <p><em>Please note that you will be responsible for finding your way back to Caltrain after the post conference events at Aloft.</em></p>
              <p><em>The shuttle will drop you off in front of Building 15. You must walk around to Building 18 for access to the conference. (<a href="img/Caltrain_to_FBcampus.pdf">See map.</a>)</em></p>
              <H level={3}>Parking at Facebook</H>
              <p>Feel free to park in any visitor space or unmarked space outside of Building 18.</p>
              <p>Complimentary valet will be available for those who need to drive @ Building 18. Early arrival is encouraged as once the lot is full, the valet team will be instructed to direct you to our satellite parking lot located at 1831 East Bayshore Rd, Redwood City, CA.</p>
              <H level={3}>Carpool</H>
              <p>Feel free to organize a ride share via the <a href="https://www.facebook.com/groups/reactjsconf">Facebook group</a>.</p>
              <H level={3}>Parking at Aloft Hotel</H>
              <p>8200 Gateway Boulevard, Newark, CA 94560</p>
              <p>Both post conference events are happening at the Aloft so you can feel free to park here and shuttle back and forth to save on gas/toll!</p>
              <H level={3}>Taxi</H>
              <p>For those without a car, feel free to arrive via taxi.</p>
              <H level={3}>Shuttles from/to Aloft Hotel</H>
              <p>For those staying at the Aloft, we will be running shuttles to and from the conference. The schedule is as follows:</p>
              <p>Wednesday, January 28th and Thursday, January 29th</p>
              <p>ONE WAY, Aloft to Facebook</p>
              <ul>
              <li>8:45am</li>
              <li>9:00am</li>
              <li>9:15am</li>
              </ul>
              <p>ONE WAY, Facebook to Aloft</p>
              <ul>
              <li>6:10pm</li>
              <li>6:20pm</li>
              <li>6:30pm</li>
              </ul>
            </div>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
