const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();
const postsRoute = require('./routes/posts');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/', postsRoute);

mongoose.connect(process.env.DB_CONNECTON, { useUnifiedTopology: true }, () => {
  console.log('connected to DB');
});

app.listen(3000);
