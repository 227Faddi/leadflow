import dotenv from "dotenv";
dotenv.config();

export const env = {
  // Server
  SERVER_PORT: Number(process.env.SERVER_PORT),
  CLIENT_URL: process.env.CLIENT_URL as string,
  NODE_ENV: process.env.NODE_ENV as string,
  BASE_DOMAIN: process.env.BASE_DOMAIN as string,

  // Database
  DB_STRING: process.env.DB_STRING as string,

  // Gemini
  GEMINI_API_KEY: process.env.GEMINI_API_KEY as string,

  // Google
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL as string,

  // Github
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID as string,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET as string,
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL as string,

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,

  // AVATAR
  AVATAR_DICEBEAR_URL: process.env.AVATAR_DICEBEAR_URL as string,

  // GUEST PROFILE
  GUEST_ID: process.env.GUEST_ID as string,

  // JWT
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET as string,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET as string,
  JWT_ACCESS_TOKEN_EXPIRATION: process.env
    .JWT_ACCESS_TOKEN_EXPIRATION as string,
  JWT_REFRESH_TOKEN_EXPIRATION: process.env
    .JWT_REFRESH_TOKEN_EXPIRATION as string,
  JWT_REFRESH_TOKEN_MAX_AGE: Number(process.env.JWT_REFRESH_TOKEN_MAX_AGE),
};

for (const [key, value] of Object.entries(env)) {
  if (!value) {
    throw new Error(`Missing ${key} value from env file`);
  }
}
