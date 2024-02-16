const mongoose = require("mongoose");

// ============================================================
// FOR OPTICAL

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
  engUnit1: {
    type: String,
  },
  engUnit2: {
    type: String,
  },
  engFy: {
    type: String,
  },
  engHy: {
    type: String,
  },
  hindiUnit1: {
    type: String,
  },
  hindiUnit2: {
    type: String,
  },
  hindiFy: {
    type: String,
  },
  hindiHy: {
    type: String,
  },
  mathUnit1: {
    type: String,
  },
  mathUnit2: {
    type: String,
  },
  mathFy: {
    type: String,
  },
  mathHy: {
    type: String,
  },
  sciUnit1: {
    type: String,
  },
  sciUnit2: {
    type: String,
  },
  sciFy: {
    type: String,
  },
  sciHy: {
    type: String,
  },
  gkUnit1: {
    type: String,
  },
  gkUnit2: {
    type: String,
  },
  gkFy: {
    type: String,
  },
  gkHy: {
    type: String,
  },
  urduUnit1: {
    type: String,
  },
  urduUnit2: {
    type: String,
  },
  urduFy: {
    type: String,
  },
  urduHy: {
    type: String,
  },
  sstUnit1: {
    type: String,
  },
  sstUnit2: {
    type: String,
  },
  sstFy: {
    type: String,
  },
  sstHy: {
    type: String,
  },
  cmptrUnit1: {
    type: String,
  },
  cmptrUnit2: {
    type: String,
  },
  cmptrFy: {
    type: String,
  },
  cmptrHy: {
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

const users1 = new mongoose.model("studentData1", userSchema);
module.exports = users1;
