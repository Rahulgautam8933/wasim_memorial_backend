const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  studentId: {
    type: String,
  },
  studentName: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  mbl: {
    type: String,
  },
  address: {
    type: String,
  },
  rollNumber: {
    type: String,
  },
  dob: {
    type: String,
  },
  classSection: {
    type: String,
  },
  engUnit1Wrtn: {
    type: String,
  },
  engUnit2Wrtn: {
    type: String,
  },
  engFyWrtn: {
    type: String,
  },
  engHyWrtn: {
    type: String,
  },
  engUnit1orl: {
    type: String,
  },
  engUnit2orl: {
    type: String,
  },
  engFyorl: {
    type: String,
  },
  engHyorl: {
    type: String,
  },
  HindiUnit1wrtn: {
    type: String,
  },
  HindiUnit2wrtn: {
    type: String,
  },
  HindiFywrtn: {
    type: String,
  },
  HindiHywrtn: {
    type: String,
  },
  HindiUnit1orl: {
    type: String,
  },
  HindiUnit2orl: {
    type: String,
  },
  HindiFyorl: {
    type: String,
  },
  HindiHyorl: {
    type: String,
  },
  mathUnit1wrtn: {
    type: String,
  },
  mathUnit2wrtn: {
    type: String,
  },
  mathFywrtn: {
    type: String,
  },
  mathHywrtn: {
    type: String,
  },
  MathUnit1orl: {
    type: String,
  },
  MathUnit2orl: {
    type: String,
  },
  MathFyorl: {
    type: String,
  },
  MathHyorl: {
    type: String,
  },
  gkUnit1wrtn: {
    type: String,
  },
  gkUnit2wrtn: {
    type: String,
  },
  gkFywrtn: {
    type: String,
  },
  gkHywrtn: {
    type: String,
  },
  gkUnit1orl: {
    type: String,
  },
  gkUnit2orl: {
    type: String,
  },
  gkFyorl: {
    type: String,
  },
  gkHyorl: {
    type: String,
  },
  UrduUnit1wrtn: {
    type: String,
  },
  UrduUnit2wrtn: {
    type: String,
  },
  UrduFywrtn: {
    type: String,
  },
  UrduHywrtn: {
    type: String,
  },
  UrduUnit1orl: {
    type: String,
  },
  UrduUnit2orl: {
    type: String,
  },
  UrduFyorl: {
    type: String,
  },
  UrduHyorl: {
    type: String,
  },
  artUnit1: {
    type: String,
  },
  artUnit2: {
    type: String,
  },
  artFy: {
    type: String,
  },
  artHy: {
    type: String,
  },
  twdHalfYear: {
    type: String,
  },
  twdFinalYear: {
    type: String,
  },
  twdTotal: {
    type: String,
  },
  tsaHalfYear: {
    type: String,
  },
  tsaFinalYear: {
    type: String,
  },
  tsaTotal: {
    type: String,
  },
  result: {
    type: String,
  },
  session: {
    type: String,
  },
});

// ============================================================

const ukgLkgData = new mongoose.model("ukgLkg", userSchema);
module.exports = ukgLkgData;
