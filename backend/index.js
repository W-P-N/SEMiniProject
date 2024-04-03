import express from 'express';
import mongoose from 'mongoose';
import userSchema from './models/userModel.js';
import { PORT, dbLink } from './config.js';
import cors from 'cors';
import productRouter from './routes/productRoutes.js';
import fs from 'fs';

const app = express();
const port = PORT;

// Middleware for JSON transfer
app.use(express.json());

// Middleware for CORS
app.use(cors());

app.get("/", (request, response) => {
    return response.status(234).send('This is working');
});

// Product Schema
app.use('/products', productRouter);

mongoose.connect(dbLink,{}).then((req, res) => {
    console.log("Database connected.");
}).catch((error) => {
    console.log(error.message);
})

const UserModel = mongoose.model('User', userSchema);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
