import axios from "axios";
import { BASE_URL, NEWS_API_KEY } from "../utils/constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: NEWS_API_KEY },
});

const getHeadlines = (payload) =>
  api.get("/top-headlines?country=in&category=technology&pageSize=50");

export default {
  getHeadlines,
};
