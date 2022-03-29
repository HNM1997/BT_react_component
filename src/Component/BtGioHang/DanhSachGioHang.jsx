import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DanhSachGioHang extends Component {
  renderSanPham = () => {
    return this.props.arrPhone.map((phone, index) => {
      return (
        <div className="col-4">
          <SanPhamGioHang
            themSP={this.props.themSP}
            phone={phone}
            key={index}
          />
        </div>
      );
    });
  };
  render() {
    const { themSp } = this.props;
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()};</div>;
      </div>
    );
  }
}
