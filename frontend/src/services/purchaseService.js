import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getPurchases = async () => {
  const response = await API.get("/purchases");
  return response.data;
};

export const purchaseVehicle = async (payload) => {
    const response = await API.post("/purchases", payload);
    return response.data;
};