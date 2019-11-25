import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
class SearchBar extends Component {
	state = {
		searchTerm: this.props.searchTerm,
		location: this.props.location
	};
	onInputSearchChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	onInputLocationChange = (e) => {
		this.setState({ location: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.searchTerm, this.state.location);
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.onFormSubmit}>
					<Form.Row>
						<Col sm={12} md={4}>
							<Form.Label>Search</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Enter a search?"
								value={this.state.searchTerm}
								onChange={this.onInputSearchChange}
							/>
						</Col>
						<Col sm={12} md={4}>
							<Form.Group controlId="search">
								<Form.Label>Location</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Enter a city name"
									value={this.state.location}
									onChange={this.onInputLocationChange}
								/>
							</Form.Group>
						</Col>
						<Col md={4}>
							<Button variant="primary" type="submit">
								Search
							</Button>
						</Col>
					</Form.Row>
				</Form>
			</div>
		);
	}
}

export default SearchBar;
