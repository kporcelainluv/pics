import React from "react";
import unsplash from "../API/unsplash";
import { SearchBar } from "./SearchBar";
import { ImageList } from "./ImageList";

export class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className={"ui container"} style={{ marginTop: "50px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <span>Found {this.state.images.length} images </span>
        <div>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}
