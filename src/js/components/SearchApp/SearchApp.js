var Header = require('../Header/Header');
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
			<div id="page">
				<div className="skycom-container clearfix">
					<div className="skycom-12">
						<Header/>
					</div>
				</div>

				<div className="skycom-container clearfix main">
					<div id="content" className="skycom-12">
						<SearchResults results={this.state.results}/>
					</div>
				</div>
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
