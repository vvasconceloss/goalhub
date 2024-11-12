import expressApp from "./app";

const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => console.log(`Server running on port ${PORT}`));