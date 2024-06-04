const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send(
    `<h1>Use 'localhost:${PORT}/product/{productID}' in search bar</h1>`
  );
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  let all_products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  products = all_products.products;
  let product = products.filter((el) => el.id === id * 1);
  res.send(product);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}...`);
});
