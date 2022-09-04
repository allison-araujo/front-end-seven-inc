import axios from "axios";
import http from "../https/http";

import { Employee, IdType } from "../ts/types";

export const findEmplooyers = async () => {
  try {
    const json = await axios.get(`${http}`);

    return json;
  } catch (error) {
    console.log("Não existe funcionários cadastrados ", error);
  }
};

export const findEmplooyersDetails = async (id: any) => {
  try {
    return await axios.get(`/${http}/emplooye/${id}`);
  } catch (error) {
    console.log("erro find employers ", error);
  }
};

export const createEmployer = async (emplooyer: Employee) => {
  const json = await axios.post(`${http}/exmployee`, emplooyer);

  return json;
};

export const deleteEmplooyer = async (id: IdType) => {
  return await axios.delete(`${http}/${id}`);
};

export const editEmplooyer = async (id: IdType, emplooyer: Employee) => {
  return await axios.put(`/${http}/${id}`, emplooyer);
};
