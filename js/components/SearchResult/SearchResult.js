var React = require('react');
var ReactPropTypes = React.PropTypes;

var SearchResult = React.createClass({

	propTypes: {
		result: ReactPropTypes.object.isRequired
	},

	/**
	 * @return {object}
	 */
	render: function () {
		var result = this.props.result;
		var imageUrl = "http://images.metadata.sky.com/pd-image/" + result.mid + "/l/352";

		return (
			<li className="search-result search-result-fw" data-result-type="fw" data-uuid={result.uuid}>
				<a className="thumbnail-wrapper thumbnail-link" href={result.url}>
					<img className="thumbnail" src={imageUrl}/>
				</a>

				<div className="data">
					<h3 className="title">
						<a href={result.url}>{result.title}</a>
						{
							result.certificate &&
							<span class="rating">{result.certificate}</span>
						}
					</h3>

					<p class="summary">{result.summary}</p>
					<ul class="viewing-options colour">
						{
							result.goUrl &&
							<li class="viewing-option sky-go">
								<a href="{result.goUrl}"><i class="skycon-sky-go" aria-hidden="true"></i>Watch</a>
							</li>
						}
					</ul>
				</div>
			</li>
		);
	}

});

module.exports = SearchResult;
