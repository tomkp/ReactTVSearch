

var fake =  [
	{
		title: 'Test Title 1',
		description: 'description 1'
	},
	{
		title: 'Test Title 2',
		description: 'description 2'
	}
];



var SearchAPI = {

	search: function(term, success, failure) {
		console.log('SearchAPI:search:' + term);
		success(fake);
	}

};

module.exports = SearchAPI;
