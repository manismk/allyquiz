import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../firebase";
import { NavigateFunction, Location } from "react-router-dom";

type initialStateType = {
  user: User | undefined;
  loginLoading: boolean;
  error: string;
};
const initialState: initialStateType = {
  user: undefined,
  loginLoading: false,
  error: "",
};

export const handleGoogleSignIn = createAsyncThunk(
  "auth/googleLogin",
  async (
    { navigate, location }: { navigate: NavigateFunction; location: Location },
    thunkAPI
  ) => {
    const locationState = location.state as any;
    const from = locationState?.from?.pathname || "/";
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(`${error.code}`);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGoogleSignIn.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(handleGoogleSignIn.fulfilled, (state) => {
      state.loginLoading = false;
    });
    builder.addCase(handleGoogleSignIn.rejected, (state, { payload }) => {
      state.loginLoading = false;
      state.error = payload + "";
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
