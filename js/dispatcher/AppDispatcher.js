var Dispatcher = require('flux').Dispatcher;
var PayloadSources = require('../constants/PayloadSources');
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {

	handleServerAction: function(action) {

		var payload = {
			source: PayloadSources.SERVER_ACTION,
			action: action
		};

		this.dispatch(payload);
	}

});

module.exports = AppDispatcher;
