console.log("Starting app");

//fs appends data to a specific file ("filename.txt", "data that is being appended")
const fs = require("fs");
// this will append "hello world" to greetings.txt
// if greetings.txt isn't created it will create it

const os = require("os");

// this will get the info from the user of the computer
// some of the options are username, home directory etc
let user = os.userInfo();

// console.log(user);

//appendFileSync makes sure that the error message doesn't show up when using only appendFile
fs.appendFileSync("greetings.txt", `Hello ${user.username} !`);
