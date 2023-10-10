const express = require("express");
const app = express();
const port = 3000;

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

app.get("/factorial", (req, res) => {
  const q = req.query.number;
  return res.redirect(`/factorial/${q}`);
});

app.get("/factorial/:number", (req, res) => {
  const q = req.params.number;
  return res.send(`${factorial(q)}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
