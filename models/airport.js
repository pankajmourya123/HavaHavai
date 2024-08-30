import mongoose from 'mongoose';

const AirportSchema = new mongoose.Schema({
  icao_code: { type: String, required: true },
  iata_code: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  city_id: { type: Number, required: true },
  country_id: { type: Number, required: true },
  continent_id: { type: Number, required: true },
  latitude_deg: { type: Number, required: true },
  longitude_deg: { type: Number, required: true },
  elevation_ft: { type: Number, required: true },
  wikipedia_link: { type: String },
  created_at: { type: String },
  updated_at: { type: String },
});

// Create a model using the schema
const Airport = mongoose.model('Airport', AirportSchema);

export default Airport;
