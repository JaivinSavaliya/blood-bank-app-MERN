import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./authAction";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState = {
    loading: false,
    error: null,
    user: null,
    token,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //reducer for login user
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

        // reducer for register user
        builder.addCase(userRegister.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(userRegister.fulfilled, (state, { payload }) => {
            state.loading = false;
            // state.success = true;
            state.error = null;
            state.user = payload.user;
        })
        builder.addCase(userRegister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        })
    }
})

export default authSlice;