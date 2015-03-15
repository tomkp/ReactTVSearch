var jsonp = require('../util/jsonp');
var BASE_URL = 'http://api.search.sky.com/query.json?callback=callback&category=newtv&term='

var SearchAPI = {

	search: function(term, success, failure) {

		jsonp.send(BASE_URL + term, {
			callbackName: 'callback',
			onSuccess: function(json){
				success(json);
			},
			onTimeout: function(){
				failure('timeout');
			},
			timeout: 5
		});

	}

};

module.exports = SearchAPI;
