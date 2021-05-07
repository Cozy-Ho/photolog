import dotenv from "dotenv";

dotenv.config();

export const mapbox = {
    key: process.env.REACT_APP_MAPBOX_API_KEY,
};
