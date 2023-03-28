import path from 'path';
import API from './api';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

const root = path.join(__dirname, 'client', 'build');
app.use(express.static(root));

app.use('/api', API);

app.get("/", (req: any, res: any) => {
    res.json({ message: "API is working." });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});