import express from "express";
import cors from "cors";
import { config } from "../config";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});
