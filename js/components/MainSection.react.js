/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var SearchConstants = require('../constants/ActionTypes');
var SearchItem = require('./SearchItem.react.js');

var MainSection = React.createClass({

  propTypes: {
    results: ReactPropTypes.array.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {

	  console.log('Main Section Render Start');

    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.results).length < 1) {
      return null;
    }

    var results = this.props.results;
    var resultElements = [];

    for (var iPos = 0; iPos < results.length; iPos += 1) {
      resultElements.push(<SearchItem title={results[iPos].title} description={results[iPos].description} />);
    }

    return (
      <section id="main">
        <label>Result</label>
        <ul id="result-list">{results}</ul>
      </section>
    );
  }

});

module.exports = MainSection;
