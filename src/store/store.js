import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../slice/statusSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
  },
});
