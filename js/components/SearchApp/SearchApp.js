var Header = require('../Header/Header.js');
var SearchResults = require('../SearchResults/SearchResults');
var React = require('react');
var SearchStore = require('../../stores/SearchStore');

function getSearchState() {
	return {
		results: SearchStore.getAll()
	}
}

var SearchApp = React.createClass({

	getInitialState: function () {
		return getSearchState();
	},

	componentDidMount: function () {
		SearchStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		SearchStore.removeChangeListener(this._onChange);
	},

	/**
	 * @return {object}
	 */
	render: function () {
		return (
			<div>
				<Header />
				<SearchResults results={this.state.results}/>
			</div>
		);
	},

	/**
	 * Event handler for 'change' events coming from the Search Store
	 */
	_onChange: function () {
		console.log('SearchApp:onChange');
		this.setState(getSearchState());
	}

});

module.exports = SearchApp;
