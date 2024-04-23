/*In the project's root directory, generate an 'index.js' file to solicit two user inputs via commands. Execute all operations specified in 'lib/math.js' 
according to the given commands. The structure of your project would look something like this:*/

const readline = require("readline");
const { add, sub, mult, div } = require("./lib./math");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Choose an operation (add, sub, mult, div): ", (operation) => {
  if (
    operation === "add" ||
    operation === "sub" ||
    operation === "mult" ||
    operation === "div"
  ) {
    rl.question("Enter the first number: ", (num1) => {
      rl.question("Enter the second number: ", (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        let result;
        switch (operation) {
          case "add":
            result = add(num1, num2);
            break;
          case "sub":
            result = sub(num1, num2);
            break;
          case "mult":
            result = mult(num1, num2);
            break;
          case "div":
            result = div(num1, num2);
            break;
          default:
            console.log("Invalid operation");
        }

        console.log(`Result: ${result}`);

        const data = `${operation},${num1},${num2},${result}\n`;

        fs.writeFile("data.csv", data, "utf-8", (err) => {
          if (err) console.log(err);
          else console.log("Data saved");
        });

        rl.close();
      });
    });
  } else {
    console.log("Invalid operation");
    rl.close();
  }
});
