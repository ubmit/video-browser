import React, { Component } from 'react';

// a class based component is aware of itself
// a class is a JS object with properties and methods

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    /* the curly braces indicate that the code inside
       was written using javascript */
    // this is the only time where a code like that is written
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          /* this is a a controlled component which is
             controlled by the state! */
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
