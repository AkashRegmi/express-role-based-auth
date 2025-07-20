import axios from "axios";

const axiosInstance =  axios.create({
    baseURL:"http://localhost:9000/api/auth",
    withCredentials:true //This tells Axios to send cookies (or other credentials like auth tokens) with every request.
});

export default axiosInstance;
