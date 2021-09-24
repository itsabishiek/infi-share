const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  // Extract the link and get the file from storage and send to download stream
  const file = await File.findOne({ uuid: req.params.uuid });

  // Link expired
  if (!file) {
    return res.render("download", { error: "Link has been expired!" });
  }

  const filePath = `${__dirname}/../${file.path}`;
  res.download(filePath);
});

module.exports = router;
