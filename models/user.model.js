"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:   String,
    firstName:  String,
    lastName:   String,
    birthdate:  Date,
    signinDate: Date,
    email:      String,
    password:   String,
    gender:     String,
    verified:   {
      type: Boolean,
      default: false
    },
    nation:     String,
    addresses:    [{
      country: String,
      region: String,
      city: String,
      postalCode: String,
      street: String,
      number: String,
      active: {
        type: Boolean,
        default: true
      }
    }]
  }, { versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
