#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter  your Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"]
  }
]);


if (answer.operator === "addition"){
  console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.operator === "subtraction"){
  console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.operator === "multiplication"){
  console.log( answer.firstNumber * answer.SecondNumber);
}
else if (answer.operator === "division"){
  console.log( answer.firstNumber / answer.SecondNumber);
}
else {
  console.log("plz select valid num")
}
console.log("THE END");