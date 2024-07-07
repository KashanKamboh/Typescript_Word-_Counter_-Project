#! /usr/bin/env node

//Importing inquirer and Chalk Packages
import inquirer from "inquirer"
import chalk from "chalk"

// Display a colorfull Welcome message
console.log(chalk.bold.blueBright("\n \t\t Welcome to Code With Kashaf - Word Counter"));
console.log("=".repeat(70));

// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold.green("Enter a sentence: ")
    }
]);

// Trimming the sentence and splitting it into the words based on "spaces"
let words = answers.sentence.trim().split(" ");

//Analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold.greenBright("-Sentence Words"));
console.log(words);
console.log(chalk.redBright(`\n Words Count: ${chalk.bold.greenBright(words.length)}`));
console.log("=".repeat(70));
