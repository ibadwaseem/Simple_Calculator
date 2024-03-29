#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstName" },
  { message: "Enter second number", type: "number", name: "SecondName" },
  {
    message: "Select one of the Operator to perform task",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log( "Your value is:",answer.FirstName + answer.SecondName);
} else if ( answer.operator === "Substraction") {
  console.log("Your value is:",answer.FirstName - answer.SecondName);
} else if (answer.operator === "Multiplication") {
  console.log("Your value is:", answer.FirstName * answer.SecondName);
} else if (answer.operator === "Division") {
  console.log( "Your value is:",answer.FirstName / answer.SecondName);
} else {
  console.log("Please select valid operator");
}
