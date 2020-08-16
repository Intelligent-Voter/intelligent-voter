const mongoose = require('mongoose');
const {Schema} = mongoose;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  created_at: { type: Date, expires: 60, default: Date.now }
})

module.exports = mongoose.model('Session', sessionSchema);