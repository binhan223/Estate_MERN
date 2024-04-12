import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());

app.use(cookieParser);

app.listen(3000, () => {
    console.log('Server is running...');
})