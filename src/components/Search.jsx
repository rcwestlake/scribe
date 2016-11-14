import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();

    this.state = ({
      input: '',
    });
  }

  updateState(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className='search-container'>
        <input
          type='search'
          value={this.state.input}
          className='search-input'
          placeholder='Search'
          onChange={e => this.updateState(e)}
        />
      </div>
    );
  }
}

export default Search;
