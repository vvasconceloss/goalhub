import express from "express";
import getApiData from "../controllers/apiController.js";

const expressRounter = express.Router();

expressRounter.get('/data/*', async (request, response) => {
  const dynamicPath = request.params[0];

  return await getApiData(dynamicPath, request, response);
});

export default expressRounter;