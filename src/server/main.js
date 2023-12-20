require('dotenv').config();

const express = require("express"); 
const ViteExpress =require ("vite-express");
const consolesRouter= require('./consolesRouter');
const authRouter = require("./authRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.use('/consoles', consolesRouter);
app.use('/auth', authRouter);


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
