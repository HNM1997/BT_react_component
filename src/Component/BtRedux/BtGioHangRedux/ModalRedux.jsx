import React, { Component } from "react";

//kết nối redux (connect hàm kết nối  reactComponent - reduxStore)
import { connect } from "react-redux";

class ModalRedux extends Component {
  renderGioHang = () => {
    //this.props.gioHang là thuộc tính nhận từ redux
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} alt="" width={75} height={100} />
          </td>
          <td>{spGH.giaBan}</td>
          <td>
            <button onClick={() => this.props.tangGiamSP(index, true)}>
              +
            </button>
            {spGH.soLuong}
            <button onClick={() => this.props.tangGiamSP(index, false)}>
              -
            </button>
          </td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHangIndex(index)}
            >
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props.gioHang);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>tên SP</th>
              <th>Hình ảnh</th>
              <th>giá bán</th>
              <th>số lượng</th>
              <th>thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan={5}></td>
              <th>tổng tiền</th>
              <td>
                {this.props.gioHang.reduce((tongTien, spGH, index) => {
                  return (tongTien += spGH.soLuong * spGH.giaBan);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state: là store tổng , => truy xuất đến GioHangReducer => biến state trên GioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang, // tạo ra 1 props của component ModalRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
    tangGiamSP: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux);
