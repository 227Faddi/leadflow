import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const mysqlDB = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

const connectionDB = async () => {
  try {
    const connection = await mysqlDB.getConnection();
    console.log('Connected successfully to the database');
    connection.release();
  } catch (err) {
    console.error('Connection failed:', err);
  }
};

connectionDB();

export default mysqlDB;
