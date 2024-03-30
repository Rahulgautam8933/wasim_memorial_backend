const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const moment = require("moment");
const users1 = require("../models/dataEnterNusury");

const ukgLkgData = require("../models/ukgLkgSchema");
const sixToEight = require("../models/sixToEight");

// ===============================================================
// nursery

router.post("/register", async (req, res) => {
  // console.log(req.body);

  const {
    studentId,
    studentName,
    fatherName,
    motherName,
    mbl,
    address,
    rollNumber,
    dob,
    classSection,
    engUnit1Wrtn,
    engUnit2Wrtn,
    engFyWrtn,
    engHyWrtn,
    engUnit1orl,
    engUnit2orl,
    engFyorl,
    engHyorl,
    HindiUnit1wrtn,
    HindiUnit2wrtn,
    HindiFywrtn,
    HindiHywrtn,
    HindiUnit1orl,
    HindiUnit2orl,
    HindiFyorl,
    HindiHyorl,
    mathUnit1wrtn,
    mathUnit2wrtn,
    mathFywrtn,
    mathHywrtn,
    MathUnit1orl,
    MathUnit2orl,
    MathFyorl,
    MathHyorl,
    gkUnit1wrtn,
    gkUnit2wrtn,
    gkFywrtn,
    gkHywrtn,
    gkUnit1orl,
    gkUnit2orl,
    gkFyorl,
    gkHyorl,
    UrduUnit1wrtn,
    UrduUnit2wrtn,
    UrduFywrtn,
    UrduHywrtn,
    UrduUnit1orl,
    UrduUnit2orl,
    UrduFyorl,
    UrduHyorl,
    artUnit1,
    artUnit2,
    artFy,
    artHy,
    twdHalfYear,
    twdFinalYear,
    twdTotal,
    tsaHalfYear,
    tsaFinalYear,
    tsaTotal,
    result,
    session,
  } = req.body;

  if (!studentName) {
    res.status(422).json("plz fill all  data");
  }

  try {
    // const preuser = await users.findOne({ rollNumber: rollNumber });
    // console.log(preuser);
    // if (preuser) {
    //     res.status(422).json('user alreDY PRESENT');
    // }
    // else {
    const adduser = new users({
      studentId,
      studentName,
      fatherName,
      motherName,
      mbl,
      address,
      rollNumber,
      dob,
      classSection,
      engUnit1Wrtn,
      engUnit2Wrtn,
      engFyWrtn,
      engHyWrtn,
      engUnit1orl,
      engUnit2orl,
      engFyorl,
      engHyorl,
      HindiUnit1wrtn,
      HindiUnit2wrtn,
      HindiFywrtn,
      HindiHywrtn,
      HindiUnit1orl,
      HindiUnit2orl,
      HindiFyorl,
      HindiHyorl,
      mathUnit1wrtn,
      mathUnit2wrtn,
      mathFywrtn,
      mathHywrtn,
      MathUnit1orl,
      MathUnit2orl,
      MathFyorl,
      MathHyorl,
      gkUnit1wrtn,
      gkUnit2wrtn,
      gkFywrtn,
      gkHywrtn,
      gkUnit1orl,
      gkUnit2orl,
      gkFyorl,
      gkHyorl,
      UrduUnit1wrtn,
      UrduUnit2wrtn,
      UrduFywrtn,
      UrduHywrtn,
      UrduUnit1orl,
      UrduUnit2orl,
      UrduFyorl,
      UrduHyorl,
      artUnit1,
      artUnit2,
      artFy,
      artHy,
      twdHalfYear,
      twdFinalYear,
      twdTotal,
      tsaHalfYear,
      tsaFinalYear,
      tsaTotal,
      result,
      session,
    });
    await adduser.save();
    res.status(201).json("useradd");
    // console.log(adduser);

    // }
  } catch (error) {
    res.status(422).json(error);
  }
});

// ukg lkg

router.post("/registerUkgLkg", async (req, res) => {
  // console.log(req.body);

  const {
    studentId,
    studentName,
    fatherName,
    motherName,
    mbl,
    address,
    rollNumber,
    dob,
    classSection,
    engUnit1Wrtn,
    engUnit2Wrtn,
    engFyWrtn,
    engHyWrtn,
    engUnit1orl,
    engUnit2orl,
    engFyorl,
    engHyorl,
    HindiUnit1wrtn,
    HindiUnit2wrtn,
    HindiFywrtn,
    HindiHywrtn,
    HindiUnit1orl,
    HindiUnit2orl,
    HindiFyorl,
    HindiHyorl,
    mathUnit1wrtn,
    mathUnit2wrtn,
    mathFywrtn,
    mathHywrtn,
    MathUnit1orl,
    MathUnit2orl,
    MathFyorl,
    MathHyorl,
    gkUnit1wrtn,
    gkUnit2wrtn,
    gkFywrtn,
    gkHywrtn,
    gkUnit1orl,
    gkUnit2orl,
    gkFyorl,
    gkHyorl,
    UrduUnit1wrtn,
    UrduUnit2wrtn,
    UrduFywrtn,
    UrduHywrtn,
    UrduUnit1orl,
    UrduUnit2orl,
    UrduFyorl,
    UrduHyorl,
    artUnit1,
    artUnit2,
    artFy,
    artHy,
    twdHalfYear,
    twdFinalYear,
    twdTotal,
    tsaHalfYear,
    tsaFinalYear,
    tsaTotal,
    result,
    session,
  } = req.body;

  if (!studentName) {
    res.status(422).json("plz fill all  data");
  }

  try {
    // const preuser = await users.findOne({ rollNumber: rollNumber });
    // console.log(preuser);
    // if (preuser) {
    //     res.status(422).json('user alreDY PRESENT');
    // }
    // else {
    const adduser = new ukgLkgData({
      studentId,
      studentName,
      fatherName,
      motherName,
      mbl,
      address,
      rollNumber,
      dob,
      classSection,
      engUnit1Wrtn,
      engUnit2Wrtn,
      engFyWrtn,
      engHyWrtn,
      engUnit1orl,
      engUnit2orl,
      engFyorl,
      engHyorl,
      HindiUnit1wrtn,
      HindiUnit2wrtn,
      HindiFywrtn,
      HindiHywrtn,
      HindiUnit1orl,
      HindiUnit2orl,
      HindiFyorl,
      HindiHyorl,
      mathUnit1wrtn,
      mathUnit2wrtn,
      mathFywrtn,
      mathHywrtn,
      MathUnit1orl,
      MathUnit2orl,
      MathFyorl,
      MathHyorl,
      gkUnit1wrtn,
      gkUnit2wrtn,
      gkFywrtn,
      gkHywrtn,
      gkUnit1orl,
      gkUnit2orl,
      gkFyorl,
      gkHyorl,
      UrduUnit1wrtn,
      UrduUnit2wrtn,
      UrduFywrtn,
      UrduHywrtn,
      UrduUnit1orl,
      UrduUnit2orl,
      UrduFyorl,
      UrduHyorl,
      artUnit1,
      artUnit2,
      artFy,
      artHy,
      twdHalfYear,
      twdFinalYear,
      twdTotal,
      tsaHalfYear,
      tsaFinalYear,
      tsaTotal,
      result,
      session,
    });
    await adduser.save();
    res.status(201).json("useradd");
    // console.log(adduser);

    // }
  } catch (error) {
    res.status(422).json(error);
  }
});

// secondry
router.post("/register2", async (req, res) => {
  // console.log(req.body);

  const {
    studentId,
    studentName,
    fatherName,
    motherName,
    mbl,
    address,
    rollNumber,
    dob,
    classSection,
    engUnit1,
    engUnit2,
    engFy,
    engHy,
    hindiUnit1,
    hindiUnit2,
    hindiFy,
    hindiHy,
    mathUnit1,
    mathUnit2,
    mathFy,
    mathHy,
    sciUnit1,
    sciUnit2,
    sciFy,
    sciHy,
    gkUnit1,
    gkUnit2,
    gkFy,
    gkHy,
    urduUnit1,
    urduUnit2,
    urduFy,
    urduHy,
    sstUnit1,
    sstUnit2,
    sstFy,
    sstHy,
    cmptrUnit1,
    cmptrUnit2,
    cmptrFy,
    cmptrHy,
    artUnit1,
    artUnit2,
    artFy,
    artHy,
    twdHalfYear,
    twdFinalYear,
    twdTotal,
    tsaHalfYear,
    tsaFinalYear,
    tsaTotal,
    result,
    session,
  } = req.body;

  if (!studentName) {
    res.status(422).json("plz fill all  data");
  }

  try {
    // const preuser = await users.findOne({ rollNumber: rollNumber });
    // console.log(preuser);
    // if (preuser) {
    //     res.status(422).json('user alreDY PRESENT');
    // }
    // else {
    const adduser1 = new users1({
      studentId,
      studentName,
      fatherName,
      motherName,
      mbl,
      address,
      rollNumber,
      dob,
      classSection,
      engUnit1,
      engUnit2,
      engFy,
      engHy,
      hindiUnit1,
      hindiUnit2,
      hindiFy,
      hindiHy,
      mathUnit1,
      mathUnit2,
      mathFy,
      mathHy,
      sciUnit1,
      sciUnit2,
      sciFy,
      sciHy,
      gkUnit1,
      gkUnit2,
      gkFy,
      gkHy,
      urduUnit1,
      urduUnit2,
      urduFy,
      urduHy,
      sstUnit1,
      sstUnit2,
      sstFy,
      sstHy,
      cmptrUnit1,
      cmptrUnit2,
      cmptrFy,
      cmptrHy,
      artUnit1,
      artUnit2,
      artFy,
      artHy,
      twdHalfYear,
      twdFinalYear,
      twdTotal,
      tsaHalfYear,
      tsaFinalYear,
      tsaTotal,
      result,
      session,
    });
    await adduser1.save();
    res.status(201).json("useradd");
    // console.log(adduser);

    // }
  } catch (error) {
    res.status(422).json(error);
  }
});

// sixToEight
router.post("/registersixToEight", async (req, res) => {
  // console.log(req.body);

  const {
    studentId,
    studentName,
    fatherName,
    motherName,
    mbl,
    address,
    rollNumber,
    dob,
    classSection,
    engUnit1,
    engUnit2,
    engFy,
    engHy,
    hindiUnit1,
    hindiUnit2,
    hindiFy,
    hindiHy,
    mathUnit1,
    mathUnit2,
    mathFy,
    mathHy,
    sciUnit1,
    sciUnit2,
    sciFy,
    sciHy,
    gkUnit1,
    gkUnit2,
    gkFy,
    gkHy,
    urduUnit1,
    urduUnit2,
    urduFy,
    urduHy,
    sstUnit1,
    sstUnit2,
    sstFy,
    sstHy,
    cmptrUnit1,
    cmptrUnit2,
    cmptrFy,
    cmptrHy,
    artUnit1,
    artUnit2,
    artFy,
    artHy,
    twdHalfYear,
    twdFinalYear,
    twdTotal,
    tsaHalfYear,
    tsaFinalYear,
    tsaTotal,
    result,
    session,
  } = req.body;

  if (!studentName) {
    res.status(422).json("plz fill all  data");
  }

  try {
    // const preuser = await users.findOne({ rollNumber: rollNumber });
    // console.log(preuser);
    // if (preuser) {
    //     res.status(422).json('user alreDY PRESENT');
    // }
    // else {
    const adduser1 = new sixToEight({
      studentId,
      studentName,
      fatherName,
      motherName,
      mbl,
      address,
      rollNumber,
      dob,
      classSection,
      engUnit1,
      engUnit2,
      engFy,
      engHy,
      hindiUnit1,
      hindiUnit2,
      hindiFy,
      hindiHy,
      mathUnit1,
      mathUnit2,
      mathFy,
      mathHy,
      sciUnit1,
      sciUnit2,
      sciFy,
      sciHy,
      gkUnit1,
      gkUnit2,
      gkFy,
      gkHy,
      urduUnit1,
      urduUnit2,
      urduFy,
      urduHy,
      sstUnit1,
      sstUnit2,
      sstFy,
      sstHy,
      cmptrUnit1,
      cmptrUnit2,
      cmptrFy,
      cmptrHy,
      artUnit1,
      artUnit2,
      artFy,
      artHy,
      twdHalfYear,
      twdFinalYear,
      twdTotal,
      tsaHalfYear,
      tsaFinalYear,
      tsaTotal,
      result,
      session,
    });
    await adduser1.save();
    res.status(201).json("useradd");
    // console.log(adduser);

    // }
  } catch (error) {
    res.status(422).json(error);
  }
});

// ==================================================================

// get user data
// primary

router.get("/getdata", async (req, res) => {
  try {
    let { page, limit, searchQuery } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10; // default limit is 10

    const skip = (page - 1) * limit;

    let query = {};

    // Check if searchQuery exists and add search functionality
    if (searchQuery) {
      query = {
        $or: [
          { studentName: { $regex: searchQuery, $options: "i" } }, // Search by name (case-insensitive)
          { fatherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { motherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { mbl: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { session: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { classSection: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          // Add more fields as needed
        ],
      };
    }

    const totalCount = await users.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const preuser1 = await users
      .find(query)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: preuser1,
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
    });

    // console.log(preuser1);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get data ukg lkg

router.get("/getdataUkgLkg", async (req, res) => {
  try {
    let { page, limit, searchQuery } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10; // default limit is 10

    const skip = (page - 1) * limit;

    let query = {};

    // Check if searchQuery exists and add search functionality
    if (searchQuery) {
      query = {
        $or: [
          { studentName: { $regex: searchQuery, $options: "i" } }, // Search by name (case-insensitive)
          { fatherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { motherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { mbl: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { session: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { classSection: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          // Add more fields as needed
        ],
      };
    }

    const totalCount = await ukgLkgData.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const preuser12 = await ukgLkgData
      .find(query)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: preuser12,
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
    });

    // console.log(preuser1);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get data from form2 // secondry

router.get("/getdata1", async (req, res) => {
  try {
    let { page, limit, searchQuery } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10; // default limit is 10

    const skip = (page - 1) * limit;

    let query = {};

    // Check if searchQuery exists and add search functionality
    if (searchQuery) {
      query = {
        $or: [
          { studentName: { $regex: searchQuery, $options: "i" } }, // Search by name (case-insensitive)
          { fatherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { motherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { mbl: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { session: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { classSection: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          // Add more fields as needed
        ],
      };
    }

    const totalCount = await users1.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const preuser1 = await users1
      .find(query)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: preuser1,
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
    });

    // console.log(preuser1);
  } catch (error) {
    res.status(422).json(error);
  }
});
// get data from form2 // sixToEight

router.get("/getdatasixToEight", async (req, res) => {
  try {
    let { page, limit, searchQuery } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10; // default limit is 10

    const skip = (page - 1) * limit;

    let query = {};

    // Check if searchQuery exists and add search functionality
    if (searchQuery) {
      query = {
        $or: [
          { studentName: { $regex: searchQuery, $options: "i" } }, // Search by name (case-insensitive)
          { fatherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { motherName: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { mbl: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { session: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          { classSection: { $regex: searchQuery, $options: "i" } }, // Search by email (case-insensitive)
          // Add more fields as needed
        ],
      };
    }

    const totalCount = await sixToEight.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const preuser23 = await sixToEight
      .find(query)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: preuser23,
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
    });

    // console.log(preuser1);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get single user data
// primary

router.get("/getuser/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const userindividual = await users.findById({ _id: id });
    // console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get single user data
// ukg lkg

router.get("/getuserUkgLkg/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const userindividual = await ukgLkgData.findById({ _id: id });
    // console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get single user data

router.get("/getuser1/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const userindividual = await users1.findById({ _id: id });
    // console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get single user data sixToEight

router.get("/getusersixToEight/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const userindividual = await sixToEight.findById({ _id: id });
    // console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update data
// primary

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update data
// ukg lkg

router.patch("/updateuserUkgLkg/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await ukgLkgData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update data form2

router.patch("/updateuser1/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users1.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update data form2 sixToEight

router.patch("/updateusersixToEight/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await sixToEight.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete user data
// primary

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await users.findByIdAndDelete({ _id: id });
    // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete user data
// ukg lkg

router.delete("/deleteuserUkgLkg/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await ukgLkgData.findByIdAndDelete({ _id: id });
    // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
});
// delete user data

router.delete("/deleteuser1/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await users1.findByIdAndDelete({ _id: id });
    // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete user data sixToEight

router.delete("/deleteusersixToEight/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await sixToEight.findByIdAndDelete({ _id: id });
    // console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// for adminlogin

router.post("/savedata2", async (req, res) => {
  // console.log(req.body);
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    res.status(422).json("plz fill all  data");
  }

  try {
    const preuser = await admin.findOne({ email: email });
    // console.log(preuser);
    if (preuser) {
      res.status(422).json("user alreDY PRESENT");
    } else {
      const adduser = new admin({
        name,
        email,
        password,
        cpassword,
      });
      await adduser.save();
      res.status(201).json("useradd");
      // console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

router.post("/signin", async (req, res) => {
  let token;
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "enter data" });
  }

  try {
    const userLogin = await admin.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // authoenticayion

      token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        return res.status(422).json({ error: "invalid crediential" });
      } else {
        const data12 = await admin.find();
        res.status(200).json({
          message: " user login succesfuly",
          token: token,
        });
      }
    } else {
      res.status(400).json({ error: "invalid crediential" });
    }
    // console.log(userLogin);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET data and income for a specific date range

router.get("/custom", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ error: "Please provide start and end dates" });
    }

    // Find data within the specified date range
    const customData = await users.find({
      date: {
        $gte: startDate,
        $lte: endDate, // Adjusted to include the end date
      },
    });

    // Calculate total income considering the advance
    const customIncome = calculateTotalIncome(customData);

    // Return the data and calculated income
    res.status(200).json({
      data: customData,
      income: customIncome,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to calculate total income from the given data, considering advance
function calculateTotalIncome(data) {
  let totalIncome = 0;
  try {
    data.forEach((entry) => {
      // Convert total and advance to floats
      // const total = parseFloat(entry.total);
      const advance = parseFloat(entry.Advance);

      // Check if advance is a valid number
      // if (!isNaN(advance)) {
      // Subtract advance from total to get the effective income
      totalIncome += advance;
      // } else {
      // console.error("Invalid advance value:", entry.Advance);
      // }
    });
  } catch (error) {
    console.error("Error occurred while calculating income:", error);
  }
  return totalIncome;
}

router.get("/birthday", async (req, res) => {
  try {
    const todayUsers = await users.find();

    // Filter users whose birthday is today
    const matchedUsers = todayUsers.filter((user) => {
      return (
        new Date(user.dob).getDate() === new Date().getDate() &&
        1 + new Date(user.dob).getMonth() === 1 + new Date().getMonth()
      );
    });

    res.status(200).json(matchedUsers);
  } catch (error) {
    console.error("Error fetching users with birthday today:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
