const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true }, 
  role: { type: String, enum: ['admin', 'user'], default: 'user' } 
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);