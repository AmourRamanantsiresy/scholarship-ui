import axios from "axios";
import { getCredentials } from "./handleCredentials";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  auth: getCredentials(),
});

export default httpClient;
