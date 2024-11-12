import express from "express";
import getApiData from "../controllers/apiController.js";

const expressRounter = express.Router();

expressRounter.get('/data', getApiData);

export default expressRounter;