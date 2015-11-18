var React = require('React');
var Site = require('Site');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <section className="content wrap">
          <section className="home-section">
            <iframe
              src="https://docs.google.com/forms/d/1t60op0xw6un2moKy92koSHFZsy70jhFhSF_CuM6mu6A/viewform?embedded=true"
              className="cfp"
              width="760"
              height="1100"
              frameBorder="0"
              marginheight="0"
              marginwidth="0">
              Loading...
            </iframe>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
