import axios from "axios";

const BASE_URL = `https://pandooin.com`; // better to define in .env
export const IMAGE_URL = `https://ik.imagekit.io/pandooin`;

export const callAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
