const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  ispremiumuser: { type: Boolean },
});

module.exports = mongoose.model('User', userSchema);