const express = require("express");
const { validateToken } = require("../utils/JWT");
const { Projects } = require("../models");

const router = express.Router();

router.get("/", validateToken, async (req, res) => {
  const projects = await Projects.findAll();
  const items = projects.map((project) => ({
    title: project.title,
    desc: project.desc,
    img: project.img,
  }));
  res.status(200).json(items);
});

module.exports = router;
