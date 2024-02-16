const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let secretkey = "MYNAMEISRAHULGAUTAMIAMPERSUINGBTECHIAMINTHEFINALYEAR";

const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//we are hashing the password

signUpSchema.pre("save", async function (next) {
  console.log("hi this is bcrypt");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//   we are generate usertokken

signUpSchema.methods.generateAuthToken = async function () {
  try {
    let tokengen = jwt.sign({ _id: this._id }, secretkey);
    this.tokens = this.tokens.concat({ token: tokengen });
    await this.save();
    return tokengen;
    // console.log(tokengen)
  } catch (err) {
    console.log(err);
  }
};

const admin = new mongoose.model("admin", signUpSchema);
module.exports = admin;
