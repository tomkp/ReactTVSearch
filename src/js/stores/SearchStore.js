var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ACTION_TYPES = require('../constants/ActionTypes');

var CHANGE_EVENT = 'change';
var  _results = [];

var SearchStore = assign({}, EventEmitter.prototype, {

	/**
	 * Get the entire collection of search results.
	 * @return {object}
	 */
	getAll: function() {
		return _results;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

// Register callback to handle all updates
AppDispatcher.register(function(payload) {

	var action = payload.action;

	switch(action.actionType) {

		case ACTION_TYPES.SEARCH_SUCCESS:
			console.log('SEARCH SUCCESS');
			_results = action.results.searchResults;
			SearchStore.emitChange();
			break;

		case ACTION_TYPES.SEARCH_FAIL:
			console.log('SEARCH FAIL');
			_results = [];
			SearchStore.emitChange();
			break;

		default:
			console.log('Search Store Action Unknown');
			console.log(action);
			// no op
	}
});

module.exports = SearchStore;
