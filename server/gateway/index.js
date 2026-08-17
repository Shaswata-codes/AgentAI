import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/auth", proxy);



app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});