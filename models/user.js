
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    // match: [/^[^\s@]+@[^\s@]+$/, "Please enter a valid e-mail address"],
    // required: "Email is required"
  },

  screenName: {
    type: String,
    trim: true,
  },

  fullName: {
    type: String,
    trim:true
  },

  userId: {
    type: String,
    unique: true

  },
  
  password: {
    type: String,
    trim: true,
  
  },
  imageURL: {
    type: String,
    trim: true
  },
  
  profileDescription: {
    type: String,
    trim: true
  },

  friends: {
    type: Array,
  },

  favoriteCuisines: {
    type: String,
    trim:  true
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
