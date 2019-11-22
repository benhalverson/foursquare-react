import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import foursquare from './apis/foursquare';

class App extends Component {
	state = {
		searchTerm: '',
		results: [],
		selectedresult: null
	};

	onFormSubmit = (searchTerm, location) => {
		this.setState({
			...this.state,
			searchTerm,
			location
		});
		this.submitSearch(searchTerm, location);
	};

	onVideoSelect = (result) => {
		// Sets state for result detail
		this.setState({ selectedresult: result });
	};

	submitSearch = async (searchTerm, location) => {
		try {
			const response = await foursquare.get('/search', {
				params: {
					query: searchTerm,
					near: location
				}
			});
			this.setState({
				results: response.data.response.venues,
				selectedresult: response.data.response.venues[0]
			});
		} catch (e) {
			console.log('API Failed ', e);
		}
	};

	componentDidMount() {
		//Used for testing
		this.submitSearch('Money', 'Palo Alto, CA');
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui row">
					<SearchBar term={this.state.searchTerm} onFormSubmit={this.onFormSubmit} />
				</div>
				<div className="five wide column">
					<ResultsList results={this.state.results} />
				</div>
			</div>
		);
	}
}

export default App;
