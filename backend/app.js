import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import StudentMarks from "./routes/MarksRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    // origin: [process.env.FRONTEND_URL],
    origin: ["https://profX.vercel.app/"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",StudentMarks )

dbConnection();

app.use(errorMiddleware);
export default app;
