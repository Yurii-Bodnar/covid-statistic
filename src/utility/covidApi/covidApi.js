import axios from "axios";

axios.defaults.baseURL = "https://api.covid19api.com";

export const getCountriesStatistic = async () => {
  try {
    const { data } = await axios.get("/summary");
    return data;
  } catch (error) {
    throw error;
  }
};
