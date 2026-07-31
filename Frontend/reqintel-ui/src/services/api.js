import axios from "axios";

const api = axios.create({
    baseURL: "https://reqintel-ai.onrender.com/api"
});

// Upload Requirement Document
export const uploadDocument = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return await api.post("/Documents/upload", formData);
};

// Ask AI
export const askAI = async (question) => {
    return await api.post("/Chat", {
        question
    });
};

export default api;