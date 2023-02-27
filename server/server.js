const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

dotenv.config();

const server = http.createServer(app);

// db connect
mongoose
  .connect(config.mongooseUrl)
  .then(() => {
    console.log("mongodb connected");

    server.listen(config.port, () => {
      console.log(`Server running on port: ${config.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });
