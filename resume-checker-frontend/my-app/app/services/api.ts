import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const analyzeResume = async (formData: FormData) => {
  const response = await API.post("/analyze-resume", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};