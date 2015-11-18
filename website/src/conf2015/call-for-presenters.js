var React = require('React');
var Site = require('Site');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <section className="content wrap">
          <section className="home-section">
            <h1>Call for Presenters</h1>
            <p>The call for presenters is now closed. If you sent a proposal, you will be notified before Friday November 28th 2014 — Noon PST on the mail you entered! Thanks a lot.</p>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
