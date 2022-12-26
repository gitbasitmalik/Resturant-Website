import express from "express";
import  {cart, payment}   from "../Controllers/order.js";

const router = express.Router();

router.get("/cart", cart);
router.get("/cart/payment", payment);

export default router;