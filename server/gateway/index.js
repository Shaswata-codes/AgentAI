import express from "express";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(
    "/auth",
    createProxyMiddleware({
        target: "http://localhost:8001",
        changeOrigin: true,
    })
);

app.get("/", (req, res) => {
    res.send("Gateway is running");
});

app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});