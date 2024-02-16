const mongoose = require("mongoose");

// const DB =
//   "mongodb+srv://rg3427gr:Rahul@123@cluster0.hteigdr.mongodb.net/users?retryWrites=true&w=majority";
// const DB = 'mongodb+srv://rohan8933:Rahulgautam8933@cluster0.1s3qk9i.mongodb.net/collections?retryWrites=true&w=majority'
// const DB =
//   "mongodb+srv://vikasroshni8:vikas@123@cluster0.mve7ka4.mongodb.net/roshni_opticals?retryWrites=true&w=majority";
// const DB =
//   "mongodb+srv://vikasroshni8:kkyVTkEzHaKif74M@cluster0.mve7ka4.mongodb.net/roshni1?retryWrites=true&w=majority";
// const DB =
//   "mongodb+srv://vikasroshni8:kkyVTkEzHaKif74M@cluster0.opaefkh.mongodb.net/roshni?retryWrites=true&w=majority";
// const DB = "mongodb://localhost:27017/school";
const DB =
  "mongodb+srv://ankitroyal74339:Rahul%40123@cluster0.htm4s2b.mongodb.net/ankitroyal?retryWrites=true&w=majority";

// const DB =
//   "mongodb+srv://vikasroshni8:kkyVTkEzHaKif74M@cluster0.opaefkh.mongodb.net/roshni?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection done");
  })
  .catch((error) => {
    console.log(error);
  });
