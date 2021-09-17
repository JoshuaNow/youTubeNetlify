import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");
};

class SearchBar extends React.Component {
  state = { term: "" };
  //   onInputChange = (event) => {
  //     this.setState({ term: event.target.value });
  //   };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });

    //TODO: make sure we call call back from parent component
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label>videoSearch</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
