import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: this.props.mangSanPham[0]
    };
  }
  renderSanPham = () => {
    //lấy props mảng sản phẩm từ component ngoài vào
    return this.props.mangSanPham.map((dt, index) => {
      return (
        <SanPham key={index} dt={dt} xemChiTiet={this.xemChiTiet}/>
      );
    });
  };
  xemChiTiet = (sanPham) => {
    this.setState({
        sanPhamChiTiet: sanPham,
    })
  }
  render() {
    return <div className="container">
        <div className="row">
            {this.renderSanPham()}
        </div>
        <div className="row">
            
            <div className="col-6">
                <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
                <img src={this.state.sanPhamChiTiet.hinhAnh} alt="" />
            </div>
            <div className="col-6">
                <h3>thông số kỹ thuật</h3>
                <table className="table">
                    <tr>
                        <th>Màn Hình</th>
                        <th>{this.state.sanPhamChiTiet.manHinh}</th>
                    </tr>
                    <tr>
                        <th>Hệ điều Hành</th>
                        <th>{this.state.sanPhamChiTiet.heDieuHanh}</th>
                    </tr>
                    <tr>
                        <th>Camera trước</th>
                        <th>{this.state.sanPhamChiTiet.cameraTruoc}</th>
                    </tr>
                    <tr>
                        <th>Camera sau</th>
                        <th>{this.state.sanPhamChiTiet.cameraSau}</th>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <th>{this.state.sanPhamChiTiet.ram}</th>
                    </tr>
                    <tr>
                        <th>ROM</th>
                        <th>{this.state.sanPhamChiTiet.rom}</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>;
  }
}
