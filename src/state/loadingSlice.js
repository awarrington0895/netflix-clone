import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoadingShown: false,
  },
  reducers: {
    showLoading: (state) => {
      state.isLoadingShown = true;
    },
    hideLoading: (state) => {
      state.isLoadingShown = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
