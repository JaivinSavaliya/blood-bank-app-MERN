import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../Services/Api";
import { toast } from "react-toastify";


export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/login', { email, password, role })
            // store it as token
            if (data.success) {
                localStorage.setItem('token', data.token);
                toast.success(data.message);
                return { user: data.user, token: data.token };
            }
            else {
                return rejectWithValue(data.message);
            }
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                return rejectWithValue(err.response.data.message)
            }
            else {
                return rejectWithValue(err.message)
            }
        }
    }
)