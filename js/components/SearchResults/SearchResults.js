var React = require('react');
var ReactPropTypes = React.PropTypes;
var SearchResult = require('../SearchResult/SearchResult');

var SearchResults = React.createClass({

	propTypes: {
		results: ReactPropTypes.array.isRequired
	},

	/**
	 * @return {object}
	 */
	render: function () {

		var results = this.props.results;
		var resultElements = [];

		if (results.length < 1) {
			return null;
		}

		for (var iPos = 0; iPos < results.length; iPos += 1) {
			var result = results[iPos];
			resultElements.push(<SearchResult result={result}/>);
		}

		return (
			<ul id="search-results" className="search-results clearfix grid-list">
				{resultElements}
			</ul>
		);
	}

});

module.exports = SearchResults;
