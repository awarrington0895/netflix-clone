import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../loading/loadingSlice";
import * as loginService from "./LoginService";

const login = createAsyncThunk(
  "login/login",
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(showLoading());

      const userCredentials = await loginService.login(email, password);

      if (userCredentials) {
        console.log("Signed in user: ");
        console.log(userCredentials);
      }

      dispatch(hideLoading());
    } catch (error) {
      console.log(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {},
});

export { loginSlice, login };

export default loginSlice.reducer;
