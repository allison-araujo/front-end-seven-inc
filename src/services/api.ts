import axios from "axios";

import { Employee, IdType } from "../ts/types";

const http = "http://localhost:3002/emplooyer";

export const findEmplooyers = async () => {
  try {
    const json = await axios.get(`${http}`);

    return json;
  } catch (error) {
    console.log("Não existe funcionários cadastrados ", error);
  }
};

export const findEmplooyersDetails = async (id: any) => {
  id = id || "";
  try {
    return await axios.get(`${http}/${id}`);
  } catch (error) {
    console.log("erro find employers ", error);
  }
};

export const createEmployer = async (emplooyer: Employee) => {
  const json = await axios.post(`${http}`, emplooyer);

  return json;
};

export const deleteEmplooyer = async (id: IdType) => {
  return await axios.delete(`${http}/${id}`);
};

export const editEmplooyer = async (id: any, emplooyer: Employee) => {
  return await axios.put(`${http}/${id}`, emplooyer);
};
