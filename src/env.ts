import { config } from 'dotenv';

config();

export default {
    cryptoAPIKey: process.env.CRYPTO_API_KEY,
};
