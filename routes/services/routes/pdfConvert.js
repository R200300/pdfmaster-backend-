const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  // Placeholder – LibreOffice integration next step
  res.json({ message: "Converter backend connected" });
});

module.exports = router;
