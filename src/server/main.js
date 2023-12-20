const express = require("express"); 
const ViteExpress =require ("vite-express");
const consolesRouter= require('./consolesRouter')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/consoles', consolesRouter);


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
