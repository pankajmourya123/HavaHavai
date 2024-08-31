import express from "express";
import { getAirPortByIatacode } from "../controllers/airportController.js";

const router = express.Router();

router.route("/api/airport").get(getAirPortByIatacode);


router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Airport API!",
        testUrl1: "https://havahavai-z27z.onrender.com/api/airport?iata_code=AAA",
        testUrl2: "https://hava-havai-six.vercel.app/api/airport?iata_code=AAA",
    });
});
export default router;
