# WalletHub Profile Picture Testing

This repository contains a set of Cypress tests for testing the profile picture upload feature on the WalletHub website.

#Getting Started
To get started, clone this repository and install the dependencies:

git clone https://github.com/your-username/wallethub-profile-picture-testing.git
cd wallethub-profile-picture-testing
npm install

Next, create a cypress.env.json file in the root directory of your project, and add the following lines to specify your WalletHub username and password:

{
  "username": "your-username",
  "password": "your-password"
}


## Running the Tests
To run the tests, use the following command:

npm run test
This will launch the Cypress Test Runner, which allows you to run the tests interactively. You can also run the tests in headless mode using the following command:

npm run test:headless
This will run the tests in the background without the Test Runner UI.

## Test Description
The test suite consists of the following tests:

1. Visit the profile website: Verifies that the WalletHub homepage is loaded successfully.
2. Login testing: Logs in to the WalletHub website using the specified username and password, navigates to the profile settings page, and tests the profile picture upload feature.
3. The Login testing test performs the following steps:
4. Clicks on the "Sign up/Login" button on the homepage.
5. Enters the username and password in the login form and clicks on the "Log in" button.
6. Navigates to the profile settings page.
7. Clicks on the "Change" button next to the profile picture.
8. Uploads a test image using the attachFile() command from the cypress-file-upload plugin.
9. Clicks on the "Save" button to save the profile picture.

## Dependencies
This project uses the following dependencies:

Cypress (https://www.cypress.io)
Cypress-file-upload (https://github.com/abramenal/cypress-file-upload)
