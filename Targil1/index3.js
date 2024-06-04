const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Use 'localhost:${PORT}/{productID}' in search bar</h1>`);
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );
  res.send(product);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
