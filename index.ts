#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([{
    message: "Enter your first number",
    type: "number",
    name: "firstnumber"
},
{
    message: "Enter your second number",
    type: "number",
    name: "secondnumber"
},
{
    message: "Select your Operation",
    type: "list",
    name: "operaters",
    choices: ["Add", "Sub", "Multiply", "Division"]
},
]);

if(answer.operaters === "Add"){
    console.log(answer.firstnumber + answer.secondnumber);
}
else if(answer.operaters === "Sub"){
    console.log(answer.firstnumber - answer.secondnumber);
}
else if(answer.operaters === "Multiply"){
    console.log(answer.firstnumber * answer.secondnumber);
}
else if(answer.operaters === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
}
else{
    console.log("Please select given operaters");
}