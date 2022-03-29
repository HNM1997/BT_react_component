import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import phoneData from '../../data/phoneData.json'
export default class BaiTapTruyenFuncTion extends Component {
  render() {
    return (
      <div>
          <DanhSachSanPham  mangSanPham = {phoneData}/>
      </div>
    )
  }
}
