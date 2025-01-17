import mysql2 from 'mysql2';
import { Sequelize } from 'sequelize';
import { env } from './index.js';

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  port: env.DB_PORT,
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
