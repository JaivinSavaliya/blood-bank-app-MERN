import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    // extraReducers:{}
})

export default authSlice;