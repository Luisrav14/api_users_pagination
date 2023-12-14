import express from "express";
import "dotenv/config";

import { connectDB } from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
