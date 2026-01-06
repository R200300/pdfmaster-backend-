const express = require("express");
const { generateResume } = require("../services/resume.service");

const router = express.Router();

router.post("/generate", async (req, res) => {
  const pdfPath = await generateResume(req.body);
  res.download(pdfPath);
});

module.exports = router;
