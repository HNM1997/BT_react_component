//rxreduce
//khởi tạo giá trị ban đầu của stroe
const stateGioHang = {
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

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xử lý logic thêm giở hàng
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      //xóa giở hàng dựa vào index
      gioHangCapNhat.splice(action.index, 1);
      //gán giở hàng mới cho state.gioHang => render lại giao diện
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      const { index, tangGiam } = action;
      let gioHangCapNhat = [...state.gioHang];
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        if (gioHangCapNhat[index].soLuong >= 1) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
