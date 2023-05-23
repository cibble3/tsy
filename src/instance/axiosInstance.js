import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`, // Replace with your API base URL
  baseURL: "http://127.0.0.1:8000/api/v1/", // Replace with your API base URL
  timeout: 5000, // Replace with your desired timeout value
  // Add other default configurations as needed
});

export default axiosInstance;
