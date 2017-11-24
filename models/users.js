'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);