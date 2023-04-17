const os = require("os");

// info about user
const user = os.userInfo();
console.log(user);

// tbis method returns the system uptime in seconds
console.log("this is system time " + os.uptime() + " seconds");

const current = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(current);
