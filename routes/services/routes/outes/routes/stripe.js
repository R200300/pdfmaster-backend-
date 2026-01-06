const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/create-subscription", async (req, res) => {
  res.json({ message: "Stripe backend connected" });
});

module.exports = router;
