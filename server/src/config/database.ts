import { Sequelize } from "sequelize";
import { env } from "./index.js";

const sequelize = new Sequelize(env.DB_STRING);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export const synchronizeTables = async () => {
  try {
    await sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (err) {
    console.error("Database synchronization failed:", err);
  }
};

export default sequelize;
