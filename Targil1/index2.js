const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Use 'localhost:${PORT}/{family}/{name}' in search bar</h1>`);
});

app.get("/:family/:name", (req, res) => {
  const { family } = req.params;
  const { name } = req.params;
  res.send(`<h1>Hello ${family} ${name}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}...`);
});
