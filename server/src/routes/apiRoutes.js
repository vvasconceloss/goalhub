import express from "express";
import getApiData from "../controllers/apiController.js";

const expressRounter = express.Router();

expressRounter.get('/data/:query', async (request, response) => {
  return await getApiData(request.params.query, request, response);
});

export default expressRounter;