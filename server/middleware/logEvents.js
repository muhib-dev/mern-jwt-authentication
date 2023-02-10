const fs = require("fs");
const fsPromises = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

// Add log file in project folder [log]
const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), "yyyy-MMM-dd(pp)")}`;
  const log = `${dateTime}\t${uuidv4()}\t${message}\n`;

  try {
    //create floder is not exist
    const logPath = path.join(__dirname, "..", "logs");
    if (!fs.existsSync(logPath)) {
      await fsPromises.promises.mkdir(logPath);
    }

    //append data to file
    const appendFile = path.join(__dirname, "..", "logs", logFileName);
    await fsPromises.promises.appendFile(appendFile, log);
  } catch (err) {
    console.log(err);
  }
};

//request Logger middleware
const requestLogger = (req, _res, next) => {
  // logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");

  console.log(`${req.method} ${req.path}`);

  next();
};

module.exports = { logEvents, requestLogger };
