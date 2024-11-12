import axios from "axios";
import configApi from "../config/configApi.js";

const fetchDataApi =  async () => {
  try {
    const apiResponse = await axios.get(configApi.apiUrl, {
      headers: {
        'x-rapidapi-key': configApi.apiKey,
        'x-rapidapi-host': configApi.apiHost,
      },
    });

    return apiResponse.data;
  } catch (error) {
    console.log(`Failed to receive data from external API: ${error}`);
  }
}

export default fetchDataApi;