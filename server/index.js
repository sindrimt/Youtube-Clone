import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// prefixes api with /api

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/api", (req, res) => {
  res.send("Api home page");
});

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "build", "index.html")));

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));
