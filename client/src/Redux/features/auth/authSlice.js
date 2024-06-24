import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authAction";

const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.loading = false;
            state.error = null;
            state.user = payload.user;
            state.token = payload.token;
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default authSlice;