var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var SearchAPI = require('../util/SearchAPI');

var SearchActions = {

	/**
	 * @param  {string} term
	 */
	performSearch: function (term) {

		AppDispatcher.handleServerAction({actionType: ActionTypes.SEARCH_CHANGETERM});

		//Calling Asynchronous Action
		SearchAPI.search(term, function (dataObj) {
			AppDispatcher.handleServerAction({actionType: ActionTypes.SEARCH_SUCCESS, results: dataObj});
		}.bind(this), function (error) {
			AppDispatcher.handleServerAction({actionType: ActionTypes.SEARCH_FAIL, error: error});
		}.bind(this));

	}

};


module.exports = SearchActions;
