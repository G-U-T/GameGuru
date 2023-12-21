require('dotenv').config();

const express = require("express"); 
const ViteExpress =require ("vite-express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', require("./api"));
app.use("/auth", require("./auth/authRouter"));



ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
