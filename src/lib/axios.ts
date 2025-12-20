import axios from "axios";

// Create a configured Axios instance with a base URL and default headers
const BASE_URL = axios.create({
  // Base URL for all API requests
  baseURL: "https://fitness.elevateegy.com/api/v1",

  // Default headers sent with every request
  headers: {
    "Content-Type": "application/json",
  },
 });

export default BASE_URL;

// Export axios itself to use helpers like axios.isAxiosError
export { axios };
