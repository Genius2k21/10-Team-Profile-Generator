const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const express = require("express");
const path = require("path");
const axios = require("axios");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
var pdf = require("html-pdf");
var options = {
  format: "Letter"
};

//Module Imports
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./output/generateHTML.js");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;