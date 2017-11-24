'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);