const express = require("express");
const { SEARCH_ITEM_LIST } = require("../data/data");
const { validateToken } = require("../utils/JWT");

const router = express.Router();

router.get("/", validateToken, (req, res) => {
  res.status(200).json(SEARCH_ITEM_LIST);
});

module.exports = router;
