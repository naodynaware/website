import API from './api';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
    res.send("Welcome to Express!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api', API);