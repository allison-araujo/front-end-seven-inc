import { Employee, IdType } from "../ts/types";

import http from "../https/http";

export const findEmplooyers = async () => {
  try {
    const json = await http.get("/");

    return json;
  } catch (error) {
    console.log("Não existe funcionários cadastrados ", error);
  }
};

export const findEmplooyersDetails = async (id: IdType) => {
  id = id || "";
  try {
    return await http.get(`${id}`);
  } catch (error) {
    console.log("erro find employers ", error);
  }
};

export const createEmployer = async (emplooyer: Employee) => {
  const json = await http.post(`${emplooyer}`);

  return json;
};

export const deleteEmplooyer = async (id: IdType) => {
  return await http.delete(`/${id}`);
};

export const editEmplooyer = async (id: IdType, emplooyer: Employee) => {
  return await http.put(`/${id}`, emplooyer);
};
