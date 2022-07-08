const express = require("express");
const { data } = require("./data");
const router = express.Router();

function sortedData(sortParam) {
  let dataArr = [];
  if (sortParam === "earliest") {
    dataArr = data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  } else if (sortParam === "latest") {
    dataArr = data.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  } else {
    dataArr = data;
  }
  return dataArr;
}

router.get("/prices", (req, res) => {
  let sort = req.query.sort;
  let sortedResult = sortedData(sort);

  res.json({ data: sortedResult });
});

module.exports = router;
