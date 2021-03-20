import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    API_URL: process.env.API_URL
}