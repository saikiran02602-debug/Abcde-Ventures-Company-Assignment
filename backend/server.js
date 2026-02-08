const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  items.push(req.body);
  res.send({ message: "Item added", data: req.body });
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server Working ✅");
});

// ITEMS API
 

// ORDER API
app.post("/orders", (req, res) => {
  console.log(req.body);
  res.json({ message: "Order Created Successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
app.post("/users", (req, res) => {
  res.send({
    message: "User created",
    data: req.body
  });
});
app.post("/users/login", (req, res) => {
  const { username, password } = req.body;

  // Simple test login (assignment kosam)
  if (username === "john" && password === "1234") {
    return res.send({
      token: "123456789"   // dummy token
    });
  }

  res.status(400).send("Invalid username/password");
});
// DELETE item from cart (demo purpose)
app.delete("/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Deleted item id:", id);
  res.json({ message: "Item deleted successfully" });
});



