import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('Connected to MongoDB');
}).catch ((err) => {
    console.log(err);
});


const app = express();

app.use(express.json());

app.use(cookieParser);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})