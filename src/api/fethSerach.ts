import axios from "axios";
const url = "https://kinopoiskapiunofficial.tech/api/v2.2/films";

const api = axios.create({
  baseURL: url,
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
});
export async function fetchTodos() {
  try {
    const response = await api.get("79848");
    return response.data;
  } catch (e) {
    alert(e);
  }
}
