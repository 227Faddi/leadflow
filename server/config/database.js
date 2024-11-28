import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const name = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(name, username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();

  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export const synchronizeTables = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  } catch (err) {
    console.error('Database synchronization failed:', err);
  }
};

export default sequelize;
