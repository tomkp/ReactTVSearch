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
var SearchActions = require('../../actions/SearchActions');
var ENTER_KEY_CODE = 13;

var SearchBox = React.createClass({

	propTypes: {
		className: ReactPropTypes.string,
		id: ReactPropTypes.string,
		placeholder: ReactPropTypes.string,
		value: ReactPropTypes.string
	},

	getInitialState: function () {
		return {
			value: this.props.value || ''
		};
	},

	/**
	 * @return {object}
	 */
	render: function () /*object*/ {
		return (

			<div className="search-field-wrapper">
				<div className="search-form">
					<i className="skycon-search"></i>
					<i className="skycon-close"></i>
					<input
						className="search-field"
						type="text"
						name="term"
						placeholder="Enter a programme or movie"
						autoComplete="off"
						autoCapitalize="off"
						autoCorrect="off"
						spellCheck="false"
						id="search-field"
						onChange={this._onChange}
						onKeyDown={this._onKeyDown}
						value={this.state.value}/>
					<button className="search-button" type="submit">Search</button>
				</div>
			</div>
		);
	},


	_search: function (term) {
		if (term.trim()) {
			SearchActions.performSearch(term);
		}
	},

	/**
	 * @param {object} event
	 */
	_onChange: function (/*object*/ event) {
		this.setState({
			value: event.target.value
		});
	},

	/**
	 * @param  {object} event
	 */
	_onKeyDown: function (event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			console.log('User Pressed Enter');
			this._search(event.target.value);

		}
	}

});

module.exports = SearchBox;
