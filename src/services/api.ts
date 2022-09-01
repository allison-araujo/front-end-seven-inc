import axios from "axios";

import http from "../https/http";
import { Employee, IdType } from "../ts/types";

export const findEmplooyers = async () => {
  try {
    return await axios.get(`${http}`);
  } catch (error) {
    console.log("erro find employers ", error);
  }
};

export const findEmplooyersDetails = async (id: IdType) => {
  try {
    return await axios.get(`/${http}/employee/${id}`);
  } catch (error) {
    console.log("erro find employers ", error);
  }
};

export const createEmployer = async (emplooyer: Employee) => {
  return await axios.post(`${http}/employee`, emplooyer);
};

export const deleteEmplooyer = async (id: IdType) => {
  return await axios.delete(`/${http}/employee/${id}`);
};

export const editEmplooyer = async (id: IdType, emplooyer: Employee) => {
  return await axios.put(`/${http}/employee/${id}`, emplooyer);
};
