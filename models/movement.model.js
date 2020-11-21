const mongoose = require("mongoose");

const movementSchema = new mongoose.Schema({
    code:         String,
    type:         String,
    description:  String
    date:         Date,
    userId:       ObjectId,
    receiptID:    { type: ObjectId, required: false }
  }, { versionKey: false }
);

const Movement = mongoose.model('movement', movementSchema);
module.exports = Movement;
