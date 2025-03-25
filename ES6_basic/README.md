ES6 Basics Project
Overview
This project introduces you to the basics of ECMAScript 6 (ES6) and how to use its new features in JavaScript. You will work on a series of tasks that will help you understand and apply ES6 concepts such as let, const, arrow functions, default parameters, rest and spread syntax, and more.

Learning Objectives
By the end of this project, you will be able to:

Understand what ES6 is and its new features.

Differentiate between constants and variables, including block-scoped variables.

Utilize arrow functions and default parameters in functions.

Apply rest and spread syntax in functions.

Use string templating and object creation in ES6.

Understand and apply iterators and the for-of loop.

Requirements
General
All files will be interpreted and compiled on Ubuntu 20.04 LTS using Node 20.x.x and npm 9.x.x.

The allowed editors are vi, vim, emacs, and Visual Studio Code.

All files must end with a new line.

A README.md file, located at the root of the project folder, is mandatory.

All code files should use the .js extension.

Code will be tested using the Jest Testing Framework.

Code will be analyzed using ESLint along with specific rules.

All functions must be exported.

Setup
Install Node.js
To install Node.js 20.x.x:

bash
Copier
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
Install Jest, Babel, and ESLint
To install Jest, Babel, and ESLint:

bash
Copier
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
Configuration Files
Create the following files in your project directory:

package.json: Contains the configuration for the project.

babel.config.js: Babel configuration for transpiling modern JavaScript.

.eslintrc.js: ESLint configuration file for linting your code.

Once the dependencies are installed, run npm install in the terminal to ensure all necessary project dependencies are installed.

Project Tasks
The project consists of several tasks that you need to complete. Each task builds upon the previous one and demonstrates various ES6 features. Below are the tasks you will need to complete:
