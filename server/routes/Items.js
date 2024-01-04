const express = require("express");
const { SEARCH_ITEM_LIST } = require("../data/data");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(SEARCH_ITEM_LIST);
});

module.exports = router;
