import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../Services/Api";
import { toast } from "react-toastify";

// userLogin thunk
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

// userRegister thunk
export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ email,
        password,
        role,
        name,
        organizationName,
        hospitalName,
        website,
        address,
        phone }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/register', {
                email,
                password,
                role,
                name,
                organizationName,
                hospitalName,
                website,
                address,
                phone
            })
            if(data.success) {
                toast.success(data.message);
                window.location.replace('/login');
                return {user: data.user}
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message)
            }
        }
    }
)