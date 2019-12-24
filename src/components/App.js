import React from "react";
import axios from "axios";

import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 6cc9f8f58fbf3cacfd8dbe8f1812de9d6201f8670c3433cae932f3d8c25ac0d4"
      }
    });
    console.log(res.data.results);
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className={"ui container"} style={{ marginTop: "50px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <span>Found {this.state.images.length} images </span>
      </div>
    );
  }
}
