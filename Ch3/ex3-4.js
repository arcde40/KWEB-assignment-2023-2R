const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send(`
<form method="post" action="/login">
    <div>
        <label>Username:</label>
        <input id="username-input" name="username" type="text">
    </div>
    <div>
        <label>Password:</label>
        <input id="password-input" name="password" type="password">
</div> 
    <button type="submit">Submit</button>
</form>`);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  return res.send(`ID : ${username}\nPassword : ${password}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
