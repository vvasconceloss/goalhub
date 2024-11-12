import cors from "cors";
import express from "express";
import apiRoutes from "./routes/apiRoutes.js";

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());

expressApp.use('/football', apiRoutes);

export default expressApp;