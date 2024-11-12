import axios from "axios";

const fetchDataApi =  async (params) => {
  const url = `${process.env.API_URL}/${params}`
  try {
    const apiResponse = await axios.get(url, {
      headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': process.env.API_HOST,
      },
    });

    return apiResponse.data;
  } catch (error) {
    console.log(`Failed to receive data from external API: ${error}`);
  }
}

export default fetchDataApi;