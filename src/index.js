import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./api/index.js";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cloudinary Upload API is Running...");
});

app.use("/api",apiRoutes );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
