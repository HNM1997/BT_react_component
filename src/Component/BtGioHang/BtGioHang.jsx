import React, { Component } from "react";
import DanhSachGioHang from "./DanhSachGioHang";
import ModalGoHang from "./ModalGoHang";
import phoneData from "../../data/phoneData.json";
export default class BtGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
    };
  }
  themSP = (spChon) => {
    //B1: từ spChon tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: spChon.maSP,
      tenSP: spChon.tenSP,
      giaBan: spChon.giaBan,
      hinhAnh: spChon.hinhAnh,
      soLuong: 1,
    };
    // kiểm tra sản phẩm có trong giỏ hàng chưa
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
    if(index !== -1){
      //sản phẩm đã có trong this.state.gioHang
      gioHangCapNhat[index].soLuong += 1;
    }else{
      //sản phẩm đã chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang)
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  // đặt sự kiện xóa sp tại đây
  xoaSP = (maSP) => {
    //tìm trong giỏ hàng có sp có chứa mã sp đc click thì xóa
    var gioHangCapNhat = [...this.state.gioHang]
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    if(index !== -1){
      gioHangCapNhat.splice(index,1);
    }
    //render lại giao diện sau khi cập nhật lại state sau khi xóa sản phẩm
    this.setState({
      gioHang:gioHangCapNhat
    })
  }
  tangSoLuong = (maSP,tang) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    if(tang){
      gioHangCapNhat[index].soLuong += 1;
    }else{
      if(gioHangCapNhat[index].soLuong > 1){
        gioHangCapNhat[index].soLuong -= 1 ;
      }
    }
    //cập nhật lại giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat,
    })
  }
  render() {
    let tongSOLuong = this.state.gioHang.reduce((tsl, sanPham, index) => {
      return (tsl += sanPham.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3>Bài tập giỏ hàng</h3>
        <ModalGoHang  tangGiam={this.tangSoLuong} xoaSP={this.xoaSP} gioHang={this.state.gioHang} />
        <div className="text-right">
          <span
            className="text-white bg-success p-2 "
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            giỏ hàng ({tongSOLuong})
          </span>
        </div>
        <DanhSachGioHang themSP={this.themSP} arrPhone={phoneData} />
      </div>
    );
  }
}
