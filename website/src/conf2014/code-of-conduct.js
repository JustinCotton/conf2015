var React = require('React');
var Site = require('Site');
var H = require('Header');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <section className="content wrap">
          <section className="home-section">

            <H level={2}>Code of Conduct</H>

            <p>All delegates, speakers and volunteers at React.js Conf are required to agree with the following code of conduct. Organizers will enforce this code throughout the event.</p>

            <H level={3}>The Quick Version</H>

            <p>Facebook is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks.</p>

            <p>Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>

            <H level={3}>The Less Quick Version</H>

            <p>Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>

            <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>

            <p>If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.</p>

            <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.</p>

            <p>Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>

            <p>We expect participants to follow these rules at all conference venues and conference-related social events.</p>

            <p>This Code of Conduct is borrowed from <a href="http://jsconf.com/codeofconduct.html">JSConf Code of Conduct</a>.</p>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;

