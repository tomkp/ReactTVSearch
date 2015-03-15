/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the SearchStore and passes the new data to its children.
 */

var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var SearchStore = require('../stores/SearchStore');

function getSearchState() {

	var results = SearchStore.getAll();
	console.log(results);
	return {
		results: results
	}
}

var SearchApp = React.createClass({

  getInitialState: function() {
    return getSearchState();
  },

  componentDidMount: function() {
    SearchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SearchStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
	  console.log('x');
	  console.log(this.state);
  	return (
      <div>
        <Header />
        <MainSection results={this.state.results}/>
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the Search Store
   */
  _onChange: function() {
	  console.log('SearchApp:onChange');
    this.setState(getSearchState());
  }

});

module.exports = SearchApp;
