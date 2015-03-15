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

		for (var result in results) {
			resultElements.push(<SearchResult result={result}/>);
		}

		return (
			<section id="main">
				<label>Results</label>
				<ul id="search-results" class="search-results clearfix grid-list">
					{resultElements}
				</ul>
			</section>
		);
	}

});

module.exports = SearchResults;
