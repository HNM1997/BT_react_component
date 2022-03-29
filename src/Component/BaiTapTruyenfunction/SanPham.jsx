import React, { Component } from 'react'

export default class SanPham extends Component {
    
  render() {
    let {dt} = this.props;
    return (
        <div className="card col-4">
        <img className="card-img-top" src={dt.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{dt.tenSP}</h4>
          <button className="btn btn-success" onClick={()=> this.props.xemChiTiet(dt)}>xem chi tiết</button>
        </div>
      </div>
    )
  }
}
