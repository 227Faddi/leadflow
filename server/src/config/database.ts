import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import mysql2 from 'mysql2';
dotenv.config();

const name = process.env.DB_NAME as string;
const username = process.env.DB_USER as string;
const password = process.env.DB_PASSWORD as string;
const host = process.env.DB_HOST as string;
const port = Number(process.env.DB_PORT as string);
const sequelize = new Sequelize(name, username, password, {
  host: host,
  port: port,
  dialect: 'mysql',
  dialectModule: mysql2,
});

try {
  await sequelize.authenticate();

  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export const synchronizeTables = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (err) {
    console.error('Database synchronization failed:', err);
  }
};

export default sequelize;
