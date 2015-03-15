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
      <li>
        <div class="title">{result.title}</div>
	    <div class="summary">{result.summary}</div>
      </li>
    );
  }

});

module.exports = SearchResult;
