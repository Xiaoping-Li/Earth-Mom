const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/keys_dev').mongoURI;
const PORT = process.env.PORT || 5000;
const server = express();

// Setup some middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors({
    origin: true,
    credentials: true,
}));




// Connect to MongoDB and Server
mongoose.Promise = global.Promise;
mongoose
  .connect(db, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Could not connect to MongoDB' + err));

server.listen(PORT, () => console.log(`server listen on ${PORT}`));