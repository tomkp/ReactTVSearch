/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var SearchTextInput = require('./SearchTextInput.react.js');

var Header = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <header id="header">
        <h1>Search</h1>
        <SearchTextInput id="new-todo" placeholder="What do you want to find?"/>
      </header>
    );
  }

});

module.exports = Header;
