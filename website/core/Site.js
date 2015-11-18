/**
 * @providesModule Site
 * @jsx React.DOM
 */

var React = require('React');
var HeaderLinks = require('HeaderLinks');

var Site = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>React.js Conf | January 28 &amp; 29 2015</title>
          <meta name="viewport" content="width=750" />
          <meta property="og:title" content="React.js Conf | January 28 &amp; 29 &mdash; Facebook HQ, CA" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://conf.reactjs.com/" />
          <meta property="og:image" content="http://facebook.github.io/react/img/logo_og.png" />
          <meta property="og:description" content="Come to React.js Conf to shape the future of client-side applications!" />

          <link rel="stylesheet" href="css/style.css" />

          <script type="text/javascript" src="//use.typekit.net/vqa1hcx.js"></script>
          <script type="text/javascript">{'try{Typekit.load();}catch(e){}'}</script>
        </head>
        <body>

          <div className="container">
            <div className="nav-main">
              <div className="wrap">
                <a className="nav-home" href="index.html">
                  React.js Conf
                  <div className="time-location">
                    January 28 &amp; 29<br />
                    Facebook HQ, CA
                  </div>
                </a>
                <HeaderLinks section={this.props.section} />
              </div>
            </div>

            {this.props.children}

            <footer className="wrap">
              <div className="left"><a href="code-of-conduct.html">Code of Conduct</a></div>
              <div className="right">© 2014 Facebook Inc.</div>
            </footer>
          </div>

          <div id="fb-root" />
          <script dangerouslySetInnerHTML={{__html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-387204-11', 'auto');
            ga('send', 'pageview');
          `}} />
        </body>
      </html>
    );
  }
});

module.exports = Site;
