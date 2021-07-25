const express = require('express');
const mongoose = require('mongoose');

mongoose.connect();

const app = express();

app.get('/', (req, res) => {
  res.json({message: "testing 123"})
})

// dynamic port binding for heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});