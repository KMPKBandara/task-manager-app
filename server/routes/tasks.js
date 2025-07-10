const express = require("express");
const { Task } = require("../models");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const { completed, sort } = req.query;
  let where = { userId: req.user.id };
  if (completed !== undefined) where.completed = completed === "true";
  let order = [["createdAt", sort === "asc" ? "ASC" : "DESC"]];
  const tasks = await Task.findAll({ where, order });
  res.json(tasks);
});

router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ msg: "Title required" });
  const task = await Task.create({ userId: req.user.id, title, description });
  res.json(task);
});

router.put("/:id", auth, async (req, res) => {
  const { title, description, completed } = req.body;
  let task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id },
  });
  if (!task) return res.status(404).json({ msg: "Task not found" });
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;
  await task.save();
  res.json(task);
});

router.delete("/:id", auth, async (req, res) => {
  const task = await Task.destroy({
    where: { id: req.params.id, userId: req.user.id },
  });
  if (!task) return res.status(404).json({ msg: "Task not found" });
  res.json({ msg: "Task deleted" });
});

module.exports = router;
