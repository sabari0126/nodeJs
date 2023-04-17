const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("1 " + err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("2 " + err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      "Here is the result of " + first + " " + second,
      (err, result) => {
        if (err) {
          console.log("3 " + err);
          return;
        }
        console.log("done with second task");
      }
    );
  });
});

console.log("starting new task");
