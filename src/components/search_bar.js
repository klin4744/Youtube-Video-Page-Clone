import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="top-holder">
        <div className="search-bar bg-dark">
          <a className="btn ml-0">
            <span className="text-danger">{this.props.icon2}</span>
            <strong> Lintube</strong>
          </a>
          <input
            placeholder="Search"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <button className="btn "> {this.props.icon} </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
