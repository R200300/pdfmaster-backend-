const fs = require("fs");
const { PDFDocument, rgb } = require("pdf-lib");
const { v4: uuid } = require("uuid");

async function editPDF(filePath, edits) {
  const pdfBytes = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();

  edits.forEach(edit => {
    if (edit.type === "text") {
      pages[edit.page].drawText(edit.text, {
        x: edit.x,
        y: edit.y,
        size: edit.size || 12,
        color: rgb(0, 0, 0)
      });
    }
  });

  const outPath = `temp/${uuid()}.pdf`;
  fs.writeFileSync(outPath, await pdfDoc.save());
  return outPath;
}

module.exports = { editPDF };
