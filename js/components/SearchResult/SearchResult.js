var React = require('react');
var ReactPropTypes = React.PropTypes;

var SearchResult = React.createClass({

  propTypes: {
   result: ReactPropTypes.object.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    var result = this.props.result;

    return (
      <li>result.title</li>
    );
  }

});

module.exports = SearchResult;
