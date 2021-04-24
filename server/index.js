import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import createCard from './routes/createCard.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

dotenv.config()
const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/cards', createCard)
app.use('/user', userRoutes)
//MongoDB connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
      .then(() => {
            app.listen(PORT, () => {
                  console.log(`Server running on port: ${PORT}`)
            })
      })
      .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);