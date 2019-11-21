import React, { Component } from 'react';
class SearchBar extends Component {
	state = {
		term: this.props.term || '',
		location: this.props.location || 'San Jose, CA'
	};
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onInputChangeLocation = (e) => {
		this.setState({ location: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term, this.state.location);
	};
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" >
					<label>Video Search</label>
					<input type="text" className="field" value={this.state.term} onChange={this.onInputChange} />
					<input type="text" value={this.state.location} onChange={this.onInputChangeLocation} />
          <button onSubmit={this.onFormSubmit}>Search</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
