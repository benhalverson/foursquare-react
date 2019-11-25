import React, { Component } from 'react';
import 'typeface-roboto';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import foursquare from './apis/foursquare';
import { WrappedMap } from './components/Map';
const GOOGLE_APIKEY = 'AIzaSyB4EJb8EG-OKxkYg-S1F5e9hBIV0oF23TM';
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
			const response = await foursquare
				.get('/search', {
					params: {
						query: searchTerm,
						near: location,
						limit: 10
					}
				})
				.catch((err) => {
					this.setState({
						error: err.response.data.meta.errorDetail,
						results: []
					});
				});
			this.setState({
				results: response.data.response.venues,
				error: ''
			});
		} catch (e) {
			this.setState({ error: e.message });
		}
	};

	componentDidMount() {
		//Used for testing and setting the default city
		this.submitSearch('Dog parks', 'San Jose, CA');
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<SearchBar term={this.state.searchTerm} onFormSubmit={this.onFormSubmit} />
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6}>
						<Alert color="warning">{this.state.error && <p>{this.state.error}</p>}</Alert>
						<ResultsList results={this.state.results} />
					</Col>
					<Col sm={12} md={6}>
						<WrappedMap
							results={this.state.results}
							googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_APIKEY}`}
							loadingElement={<div style={{ height: '100%' }} />}
							containerElement={<div style={{ height: '100%' }} />}
							mapElement={<div style={{ height: '50%', position: 'relative', top: '42px' }} />}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
