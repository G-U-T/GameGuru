require('dotenv').config();

const express = require("express"); 
const ViteExpress =require ("vite-express");
const consolesRouter= require('./routes/consolesRouter');
const authRouter = require("./routes/authRouter");
const gamesRouter = require("./api/games");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/consoles', consolesRouter);
app.use('/auth', authRouter);
app.use('/games', gamesRouter);


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
