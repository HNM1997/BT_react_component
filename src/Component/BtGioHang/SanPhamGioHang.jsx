import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { phone,  } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src={phone.hinhAnh} alt="..." />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <button className="btn btn-danger" onClick={() => this.props.themSP(phone)}>
            thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
