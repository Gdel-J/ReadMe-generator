// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//  Array of questions for user input

const questions = [

    {
        type: "input",
        message: "Welcome to the README generator! First, what is the name of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
    },
  
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "How the user can contribute to the repo?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What command should be run for testing?",
        name: "tests"
    },
    {
        type: "list",
        message: "What  license does your project have?",
        name: "license",
        choices: [
            
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "MPL",
            "Apache",
            "MIT",
            "BSL",
            "The UNLICENSE",
            "None",
        ]
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Do you have features for this project?",
        name: "features",
    },
    {
        type: "input",
        message: "Who would you like to thank for this work?",
        name: "credits",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
