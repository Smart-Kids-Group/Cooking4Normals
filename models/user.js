
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: "Email is required"
  },

  screenName: {
    type: String,
    trim: true,
  },

  fullName: {
    type: String,
    trim:true
  },
  
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  imageURL: {
    type: String,
    trim: true
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
