const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
)

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.listen(3000, () => console.log("Server up and running"));
