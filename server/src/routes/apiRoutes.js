import express from "express";
import getApiData from "../controllers/apiController";

const expressRounter = express.Router();

expressRounter.get('/data', getApiData);

export default expressRounter;