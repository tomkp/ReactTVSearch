var React = require('react');
var SearchBox = require('../SearchBox/SearchBox');

var Header = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <header id="header">
        <h1>Search</h1>
        <SearchBox id="new-todo" placeholder="What do you want to find?"/>
      </header>
    );
  }

});

module.exports = Header;
