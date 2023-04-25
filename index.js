import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';

import profileRoutes from './routes/profile.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8081;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

mongoose.connect(CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => {
    console.log("Server Started on port: " + PORT);
});

app.use("/profile", profileRoutes);

app.get("/", (_, res) => {
    res.send("Hello from Sunstone");
});


