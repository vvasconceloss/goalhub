import cors from "cors";
import express from "express";

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());

export default expressApp;