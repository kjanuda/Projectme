// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create
router.post('/', async (req, res, next) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) { next(err); }
});

// Read all
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) { next(err); }
});

// Read one
router.get('/:id', async (req, res, next) => {
  try {
    const proj = await Project.findById(req.params.id);
    if (!proj) return res.status(404).json({ message: 'Not found' });
    res.json(proj);
  } catch (err) { next(err); }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json(updated);
  } catch (err) { next(err); }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
});

module.exports = router;
