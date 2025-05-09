const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:8000" }));
app.use(express.json());

let orders = [];

app.get("/orders", (req, res) => {
    res.json(orders);
})



app.post("/orders", (req, res) => {
    if (!req.body.order || !Array.isArray(req.body.order)) {
      return res.status(400).json({ error: "Invalid order format" });
    }
    req.body.order.forEach(order => orders.push({ ...order, id: +new Date() }));
    res.status(201).json({ message: "Order received!", orders });
});
  
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
