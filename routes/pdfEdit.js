const express = require("express");
const multer = require("multer");
const { editPDF } = require("../services/pdfEditor.service");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const edits = JSON.parse(req.body.edits || "[]");
    const result = await editPDF(req.file.path, edits);
    res.download(result);
  } catch (err) {
    res.status(500).json({ error: "PDF edit failed" });
  }
});

module.exports = router;
