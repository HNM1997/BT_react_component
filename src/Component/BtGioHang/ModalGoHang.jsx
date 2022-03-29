import React, { Component } from "react";

export default class ModalGoHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>
            <img src={sanPham.hinhAnh} alt="" width={50} height={70} />
          </td>
          <td>{sanPham.tenSP}</td>
          <td>
            <button onClick={() => this.props.tangGiam(sanPham.maSP,true)}>+</button>
            {sanPham.soLuong}
            <button onClick={() => this.props.tangGiam(sanPham.maSP,false)}>-</button>
          </td>
          <td>{sanPham.giaBan.toLocaleString()}</td>
          <td>{(sanPham.soLuong * sanPham.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaSP(sanPham.maSP)}
            >
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  renderTongTien = () => {
    return this.props.gioHang.reduce((tongTien,spGioHang,index) => {
      return tongTien += spGioHang.soLuong * spGioHang.giaBan;
    },0).toLocaleString();
  }
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ maxWidth: "900px", width: "900px" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>tên sản phẩm</th>
                      <th>số lượng</th>
                      <th>đơn giá</th>
                      <th>thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>tổng tiền</td>
                      <td>{this.renderTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
