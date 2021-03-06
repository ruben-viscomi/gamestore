"use strict";

require("dotenv").config({ path: "vars.env" });

const path      = require("path");
const fs        = require("fs");
const express   = require("express");
const spdy      = require("spdy");
const mongoose  = require("mongoose");
const helmet    = require("helmet");

const options = {
  key:        fs.readFileSync(path.relative(__dirname, "cert/key.pem")),
  cert:       fs.readFileSync(path.relative(__dirname, "cert/cert.pem")),
  passphrase: process.env.PASSPHRASE
};

const app = express();

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", console.log.bind(console, "Successfully connected to gamestore db"));

app.use(helmet());
app.use('/', require("./routers"));

//Handle Not Found
// app.get('*', (req, res) => {
//   res.sendStatus(404);
// });

spdy.createServer(options, app)
  .listen(process.env.SERVER_PORT, err => {
    if (err) console.error(err);
    else console.log(`Server listening on: https://localhost:${process.env.SERVER_PORT}`);
  });
