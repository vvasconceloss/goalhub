import fetchDataApi from "../services/apiService";

const getApiData = async (request, response) => {
  try {
    const apiData = await fetchDataApi();
    response.json(apiData);
  } catch (error) {
    console.log(`Failed to get data from external API: ${error}`);
  }
}

export default getApiData();