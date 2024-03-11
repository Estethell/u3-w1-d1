import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.alt}></img>
      </div>
    );
  }
}

export default ImageComponent;
