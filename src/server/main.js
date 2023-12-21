require('dotenv').config();

const express = require("express"); 
const ViteExpress =require ("vite-express");
const consolesRouter= require('./consolesRouter');
const authRouter = require("./authRouter");
const usersRouter = require("./usersRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/consoles', consolesRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
