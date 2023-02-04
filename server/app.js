import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import salesRoutes from './routes/sales.js';
import managementRoutes from './routes/management.js';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());

/* Routes */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);

/** Mongoose DB */
mongoose.set('strictQuery', false);
main().catch((err) => console.log(`ERR MONGOOSE CONNECTION: ${err}`));
async function main() {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default app;
