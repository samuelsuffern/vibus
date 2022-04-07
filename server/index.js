// server/index.js
const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require('fs');

var paradas_vigoJSON = require('../server/src/static/paradas_vigo.json');

// const paradas_vigo = fs.readFileSync(path.resolve(__dirname, '/src/static/paradas_vigo.json'));
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
})

app.get("/paradas_vigo", (req,res) => {
  res.json(paradas_vigoJSON);
});
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });