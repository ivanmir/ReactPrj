import axios from "axios";

const baseURL = "Northwind/";

const instance = axios.create({
  baseURL
});

export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/Categories", {
    params
  });

  return data.d?.results || data.d || data.value;
};

export const getTableCount = async () => {
  const { data } = await instance.get("/Categories/$count");
  return data;
};
