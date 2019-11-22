import React, { Component } from 'react';
import 'typeface-roboto';

import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import foursquare from './apis/foursquare';

class App extends Component {
	state = {
		searchTerm: '',
		results: [],
		selectedresult: null,
		error: ''
	};

	onFormSubmit = (searchTerm, location) => {
		this.setState({
			...this.state,
			searchTerm,
			location
		});
		this.submitSearch(searchTerm, location);
	};

	submitSearch = async (searchTerm, location) => {
		try {
			const response = await foursquare.get('/search', {
				params: {
					query: searchTerm,
					near: location
				}
			}).catch((err) => {
				this.setState({
					error: err.response.data.meta.errorDetail, 
					results: []
				});
			})
			this.setState({
				results: response.data.response.venues,
				error: ''
			});
		} catch (e) {
			this.setState({error: e.message})
		}
	};

	componentDidMount() {
		//Used for testing
		// this.submitSearch('Money', 'Palo Alto, CA');
	}

	render() {
		 
		return (
			<div className="ui container">
				<div className="ui row">
					<SearchBar term={this.state.searchTerm} onFormSubmit={this.onFormSubmit} />
				</div>
				<div className="five wide column">
					{this.state.error && <p>{this.state.error}</p>}
					<ResultsList results={this.state.results} />
				</div>
			</div>
		);
	}
}

export default App;
