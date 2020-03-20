import React from "react";
import { render } from "react-dom";
import axios from "axios";
import { Search } from "./components/Search";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { gifUrlList: [] };
  }

  renderImage(list) {
    const images = list.map((item, index) => {
      return (
        <li className="item" key={index}>
          <img className="img" src={item} alt="" />
        </li>
      );
    });
    return <ul className="list">{images}</ul>;
  }

  render() {
    return (
      <div>
        <Search search={this.giphyAPI} />
        {this.renderImage(this.state.gifUrlList)}
      </div>
    );
  }

  giphyAPI = title => {
    const search = title;
    const limit = 50;
    const key = "PQLiDzJ1zoPXyW34cS0yFwx7UqY1CkDY";

    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    axios.get(url).then(res => {
      // console.log(res.data);
      const imgUrls = res.data.data.map(item => item.images.downsized.url);
      this.setState({ gifUrlList: imgUrls });
    });
  };
}

render(<App />, document.getElementById("root"));
