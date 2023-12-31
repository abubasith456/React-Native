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


// Create User
export const register = createAsyncThunk('register', async (payload) => {
    const { usernameValue, emailValue, passwordValue } = payload;
    console.log("register called => " + usernameValue)
    const param = {
        email: emailValue,
        username: usernameValue,
        "dateOfBirth": "13042000",
        "mobileNumber": "1234567890",
        password: passwordValue,
        passwordConf: passwordValue
    }

    const res = await axiosInstance.post("/register", param);
    const response = await res.data;
    return response;

});

// Forgot password
export const forgotPassword = createAsyncThunk('forgot', async (payload) => {
    const { emailValue } = payload;
    console.log("forgotPassword called => " + emailValue)
    const param = {
        email: emailValue
    }
    const res = await axiosInstance.post("/forgotPassword", param);
    const response = await res.data;
    return response;

});

// Forgot password / verify OTP
export const verifyOtp = createAsyncThunk('otpVerify', async (payload) => {
    const param = {
        email: payload.email,
        otp: payload.otpValue
    }
    const res = await axiosInstance.post("/forgotPassword/verify", param);
    const response = await res.data;
    return response;

});