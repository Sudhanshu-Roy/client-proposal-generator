import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://proposal-generator-backend-sup9.onrender.com",
});

export const generateProposal = (data) =>
  API.post("/generate-proposal", data);

export const getProposals = () =>
  API.get("/proposals");
