import React, { Component } from "react";

export default class DemoVongLapWithMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "iphone X", giaSP: 1000 },
        { maSP: 2, tenSP: "iphone 12 pro max", giaSP: 2000 },
        { maSP: 3, tenSP: "iphone 13 ", giaSP: 3000 },
      ],
    };
  }

  renderMangSanPham = () => {
      //c2: sử dụng map để tạo động các tag jsx từ mảng
    return this.state.mangSanPham.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.giaSP}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="bg-dark text-white p-3 text-center">Demo vòng lặp</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>giá sản phẩm</th>
            </tr>
          </thead>
          <tbody>{this.renderMangSanPham()}</tbody>
        </table>
      </div>
    );
  }
}
