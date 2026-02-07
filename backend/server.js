const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is Working");
});

// USERS API
app.post("/users", (req, res) => {
  res.send({
    message: "User created",
    data: req.body
  });
});

app.get("/users", (req, res) => {
  res.send("Users API working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

