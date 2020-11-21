const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:   String,
    firstName:  String,
    lastName:   String,
    birthdate:  Date,
    signinDate: Date,
    email:      String,
    password:   String,
    gender:     String
  }, { versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
