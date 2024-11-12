import fetchDataApi from "../services/apiService.js";

const getApiData = async (params, request, response) => {
  try {
    const apiData = await fetchDataApi(params);
    return response.json(apiData);
  } catch (error) {
    console.log(`Failed to get data from external API: ${error}`);
  }
}

export default getApiData;