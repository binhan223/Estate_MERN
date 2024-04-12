import express from 'express';
// import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('Connected to MongoDB');
}).catch ((err) => {
    console.log(err);
    process.exit(1);
});


const app = express();

app.use(express.json());

// app.use(cookieParser);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);