# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The following packages were used to implement this React project:

-   react-bootstrap: components library
-   axios: HTTP client used to communicate with the back-end
-   prop-types: types validation
-   Jest, React Testing Library, and Cypress: testing
-   prettier and eslint: static testing and linting (defining rules concerning formatting)
-   @cypress/code-coverage and @cypress/instrument-cra: generation of test coverage reports
-   faker: mock test data

# Installation

To run this project, you need to have node and npm installed in your computer. Then,
download the source code or git clone the repository.

You will need to create a .env file on the root directory of the project. This file
will contain the following environment variable:

-   REACT_APP_API_URL: the URL to the Flask API

Then, run "npm install" to download the dependencies listed in package.json from npm.
When it is done, you can run the application using "npm start".

# Tests

I defined two group of tests:

-   Unit tests: these tests use Jest and React Testing Library and can be run using the command "npm run test:coverage".
-   Integration tests: these tests use Cypress and can be run using the command "npx cypress run".

In both cases, we get test coverage reports, which can be found in the folders jest-coverage and coverage folders under
the files lcov-report/index.html.
