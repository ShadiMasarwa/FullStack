const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Use 'localhost:${PORT}/user' in search bar</h1>`);
});

app.get("/user", (req, res) => {
  res.send("<h1>Hello user</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
