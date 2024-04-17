const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Connection is successfully established"))
  .catch((error) => console.log("Error occurred: " + error.message));
