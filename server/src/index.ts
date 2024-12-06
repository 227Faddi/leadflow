import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import morgan from 'morgan';
import cors from 'cors';

import leadsRoutes from './routes/leadsRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { synchronizeTables } from './config/database.js';

const app = express();

// Synchronize db tables to match model
synchronizeTables();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

console.log('run');

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/leads', leadsRoutes);
app.use('auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
