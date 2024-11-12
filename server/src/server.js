import dotenv from "dotenv";
import expressApp from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => console.log(`Server running on port ${PORT}`));