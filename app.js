import express from "express";
import airportRoutes from "./routes/airportRoutes.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

app.use(express.json());
app.use("/", airportRoutes);

app.use(errorMiddleware);

export default app;
