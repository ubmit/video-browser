import React, { Component } from "react";

// a class based component is aware of itself
// a class is a JS object with properties and methods

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // this is the only time where a code like that is written
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );   
  }
}

export default SearchBar;