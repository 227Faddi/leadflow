import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import { synchronizeTables } from './config/database.js';
import { env } from './config/index.js';
import passportConfig from './config/passport.js';
import authRoutes from './routes/authRoutes.js';
import leadsRoutes from './routes/leadsRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(passport.initialize());
passportConfig(passport);

synchronizeTables();

if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());

app.use(
  cors({
    origin: env.CLIENT_URL,
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/leads', leadsRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(env.SERVER_PORT, () => {
  console.log(`Server is running on port ${env.SERVER_PORT}`);
});
