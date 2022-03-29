import React, { Component } from "react";

export default class SanPham_RCC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const {phim_input} = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={phim_input.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{phim_input.tenPhim}</h4>
          <p className="card-text">{phim_input.moTa}</p>
        </div>
      </div>
    );
  }
}
