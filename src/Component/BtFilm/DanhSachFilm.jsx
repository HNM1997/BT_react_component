import React, { Component } from "react";
import Film from "./Film";

export default class DanhSachFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chitietFilm: this.props.arrFilm[0],
    };
  }
  renderFilm = () => {
    return this.props.arrFilm.map((phim, index) => {
      return (
        <div className="col-2">
          <Film key={index} phim={phim} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
            {this.renderFilm()}
        </div>
      </div>
    );
  }
}
