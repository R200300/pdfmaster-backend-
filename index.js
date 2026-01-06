require("dotenv").config();
const express = require("express");
const cors = require("cors");

const pdfEditRoutes = require("./routes/pdfEdit");
const pdfConvertRoutes = require("./routes/pdfConvert");
const resumeRoutes = require("./routes/resume");
const stripeRoutes = require("./routes/stripe");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/pdf/edit", pdfEditRoutes);
app.use("/api/pdf/convert", pdfConvertRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/stripe", stripeRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", backend: "PDFMaster Pro" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend running");
});
