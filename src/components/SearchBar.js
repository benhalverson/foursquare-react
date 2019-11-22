import React, { Component } from 'react';
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
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit} >
					<label>Video Search</label>
					<input type="text" className="field" value={this.state.searchTerm} onChange={this.onInputChange} />
					<input type="text" value={this.state.location} onChange={this.onInputChangeLocation} />
          <button type="submit">Search</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
