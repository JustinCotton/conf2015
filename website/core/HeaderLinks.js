/**
 * @providesModule HeaderLinks
 */

var React = require('React');

var HeaderLinks = React.createClass({
  links: [
    {section: 'schedule', href: 'schedule.html', text: 'Schedule & Videos'},
    {section: 'venue', href: 'venue.html', text: 'Venue'},
  ],

  render: function() {
    return (
      <ul className="nav-site">
        {this.links.map(function(link) {
          return (
            <li key={link.section}>
              <a
                href={link.href}
                className={link.section === this.props.section ? 'active' : ''}>
                {link.text}
              </a>
            </li>
          );
        }, this)}
      </ul>
    );
  }
});

module.exports = HeaderLinks;
