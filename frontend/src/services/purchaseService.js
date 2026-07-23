import api from "../api/axios";

export const getPurchases = async () => {
  const response = await api.get("/purchases");
  return response.data;
};

export const purchaseVehicle = async (payload) => {
  const response = await api.post("/purchases", payload);
  return response.data;
};