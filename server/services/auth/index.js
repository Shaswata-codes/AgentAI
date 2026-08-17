import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Service is running on port ${PORT}`);
    connectDb();
});