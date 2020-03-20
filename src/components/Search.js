import React from "react";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <h2>Find your GIF</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const todo = event.target.value;
    this.setState({ title: todo });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.title);
    this.setState({ title: "" });
  };
}
