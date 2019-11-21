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

	onVideoSelect = (video) => {
		// Sets state for video detail
		this.setState({ selectedVideo: video });
	};

	submitSearch = async (searchTerm, location) => {
	
		try {
			const response = await foursquare
			  .get('/search', {
			    params: {
            query: searchTerm,
            // near: location
            // near: 'San Jose CA',
            // query:'tacos'
			    }
        })
        console.log(response.data.response.venues);
			this.setState({
				results: response.data.response.venues,
				selectedresult: response.data.response.venues[0]
			});
		} catch (e) {
			console.log('API Failed ', e);
		}
	};

	componentDidMount() {
		this.submitSearch(this.state.searchTerm, this.state.location);
	}

	render() {
		return (
			<div className="ui container">
				<div className="ui row">
					<SearchBar term={this.state.searchTerm} onFormSubmit={this.onFormSubmit} />

					<div className="eleven wide column">
						Search details...
						{/* <VideoDetail video={this.state.selectedVideo} /> */}
					</div>
				</div>
				<div className="five wide column">
          <ResultsList results={this.state.results}/>
					{/* <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          /> */}
				</div>
			</div>
		);
	}
}

export default App;
