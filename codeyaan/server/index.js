const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
require('./config/db')
dotenv.config();


const server = express();
server.use(cors());
server.use(express.json());

// Sample route
server.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


