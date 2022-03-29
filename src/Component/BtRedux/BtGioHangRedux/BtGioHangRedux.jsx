import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModalRedux from './ModalRedux'

export default class BtGioHangRedux extends Component {
  render() {
    return (
      <div className='container'>
          <h3 className='text-danger text-center p-2'>Bài tập giỏ hàng redux</h3>
          <ModalRedux/>
          <DanhSachSanPhamRedux/>
      </div>
    )
  }
}
