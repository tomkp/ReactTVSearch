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

		console.log('Main Section Render Start');

		var results = this.props.results;
		var resultElements = [];

		if (results.length < 1) {
			return null;
		}

		for (var iPos = 0; iPos < results.length; iPos += 1) {
			resultElements.push(<SearchResult title={results[iPos].title} description={results[iPos].description}/>);
		}

		return (
			<section id="main">
				<label>Results</label>
				<ul id="result-list">{results}</ul>
			</section>
		);
	}

});

module.exports = SearchResults;
