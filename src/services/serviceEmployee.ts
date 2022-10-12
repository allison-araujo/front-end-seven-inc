import { Employee } from "../ts/types";

import http from "../https/http";

export const findEmplooyers = async () => {
  try {
    const json = await http.get("/");

    return json;
  } catch (error) {
    console.log("Não existe funcionários cadastrados ", error);
  }
};

export const findEmplooyersDetails = async (id: number) => {
  try {
    return await http.get(`/${id}`);
  } catch (error) {
    console.log("erro find employers ", error);
  }
};

export const createEmployer = async (emplooyer: Employee) => {
  console.log("criar novo usuarios");
  const json = await http.post(`/`, emplooyer);

  return json;
};

export const deleteEmplooyer = async (id: number) => {
  return await http.delete(`/${id}`);
};

export const editEmplooyer = async (id: number, emplooyer: Employee) => {
  return await http.put(`/${id}`, emplooyer);
};
