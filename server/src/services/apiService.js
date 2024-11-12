import axios from "axios";

const fetchDataApi =  async () => {
  try {
    const apiResponse = await axios.get(process.env.API_URL, {
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