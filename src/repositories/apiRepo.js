import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const base_url = "https://hayat-shop.onrender.com"
const axiosInstance = axios.create({ baseURL: base_url })

// Login
export const login = createAsyncThunk('login', async (payload) => {
    const { emailValue, passwordValue } = payload; // Destructure parameters
    const param = {
        email: emailValue,
        password: passwordValue
    }
    const res = await axiosInstance.post("/login", param);
    const final = await res.data;
    return final;
});