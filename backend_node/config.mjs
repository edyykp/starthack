import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT,
    CLIENT_URL: process.env.CLIENT_URL,
    API_URL: process.env.API_URL,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS
}