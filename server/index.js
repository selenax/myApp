const express = require('express');

// dynamic port binding for heroku
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.json({message: "testing 123"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});