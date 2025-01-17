import dotenv from 'dotenv';
dotenv.config();

export const env = {
  // Server
  SERVER_PORT: Number(process.env.SERVER_PORT),
  CLIENT_URL: process.env.CLIENT_URL as string,
  NODE_ENV: process.env.NODE_ENV as string,

  // Database
  DB_NAME: process.env.DB_NAME as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: Number(process.env.DB_PORT),

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,

  // AVATAR
  AVATAR_DICEBEAR_URL: process.env.AVATAR_DICEBEAR_URL as string,

  // GUEST PROFILE
  GUEST_PROFILE_ID: process.env.GUEST_PROFILE_ID as string,

  // JWT
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET as string,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET as string,
  JWT_ACCESS_TOKEN_EXPIRATION: process.env
    .JWT_ACCESS_TOKEN_EXPIRATION as string,
  JWT_REFRESH_TOKEN_EXPIRATION: process.env
    .JWT_REFRESH_TOKEN_EXPIRATION as string,
  JWT_REFRESH_TOKEN_MAX_AGE: Number(process.env.JWT_REFRESH_TOKEN_MAX_AGE),
};
