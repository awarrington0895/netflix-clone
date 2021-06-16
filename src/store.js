import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./state/loadingSlice";

export default configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
