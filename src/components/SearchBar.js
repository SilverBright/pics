import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  onFormSubmit = e => {
    e.preventDefault();

    // props passed from parent App.js
    this.props.onSubmit(this.state.term);
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={e => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;