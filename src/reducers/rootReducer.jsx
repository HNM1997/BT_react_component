import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";

//store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi đây chứa các reducer  cho nghiệp vụ (store con)
    GioHangReducer: GioHangReducer
})