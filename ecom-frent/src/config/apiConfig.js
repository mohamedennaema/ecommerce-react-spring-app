import axios from "axios"

export const API_BASE_URL = "http://51.44.4.179:8080"; // Updated to use the proxy
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Authorization":`Bearer ${jwt}`,
    "Content-Type": "application/json",
    
  }
});
