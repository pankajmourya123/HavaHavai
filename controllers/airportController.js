import Airport from '../models/airport.js'; // Adjust the path as necessary
import catchAsyncError from '../middlewares/catchAsyncError.js'; // Error handler middleware

// Controller to get Airport data by IATA code
export const getAirPortByIatacode = catchAsyncError(async (req, res, next) => {
    const { iata_code } = req.query; // Extract the IATA code from the query parameters

    

    // Find the airport by IATA code (case insensitive)
    const airport = await Airport.findOne({ iata_code: new RegExp(`^${iata_code}$`, 'i') });

    if (!airport) {
        return res.status(404).json({
            success: false,
            message: "Airport not found",
        });
    }

    // Format the data according to the schema
    const formattedAirportData = {
        id: airport._id.toString(), // Convert ObjectId to string
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        created_at: airport.created_at,
        updated_at: airport.updated_at,
        city_id: airport.city_id,
        country_id: airport.country_id,
        continent_id: airport.continent_id
    };

    // Send the response with the formatted data
    res.status(200).json({
        success: true,
        airport: formattedAirportData,
    });
});
