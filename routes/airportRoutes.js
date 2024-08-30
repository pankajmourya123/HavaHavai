import express from "express";
import { getAirPortByIatacode } from "../controllers/airportController.js";

const router = express.Router();

router.route("/airport").get(getAirPortByIatacode);

export default router;
