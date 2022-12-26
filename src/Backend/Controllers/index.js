import order from "../Routes/order.js"
import express from "express";
const app = express();

app.use("/order", order);
app.listen(3000);
console.log("Listening...");