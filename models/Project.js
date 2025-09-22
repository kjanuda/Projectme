// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titleUnderline: { type: Boolean, default: false },
  category: { type: String },
  description: { type: String },
  badge: { type: String },
  technologies: [{ type: String }],
  link: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
