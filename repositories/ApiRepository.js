import axios from 'axios';

const base_url = "https://hayat-shop.onrender.com"
const axiosInstance = axios.create({ baseURL: base_url })

export async function dologin(email, password) {
    console.log("dologin")
    var details = {
        email: email,
        password: password,
    };
    return await axiosInstance.post("/login", details)
}