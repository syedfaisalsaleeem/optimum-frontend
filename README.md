# React Todo Application
This a todo application in which we can add items in a list using button. This application is created using purely Test Driven Development. This application stores the added data
in the backend which is communicated using rest apis.

## Getting Started
To get started using this package follow the instructions below.

## Dependencies
- node
- npm
- cypress

## Installation
- git clone https://github.com/syedfaisalsaleeem/optimum-frontend
- cd optimum-frontend
- npm install
- npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
All the test cases are described below:
### Unit Tests
- PASS  text box should render correctly
- PASS  render input box
- PASS  render button component
- PASS  test input field
- PASS  renders First screen
- PASS  message box should render correctly

### Integration Tests
- PASS  integration testing of button ,input field and list
- PASS  test for empty input field
- PASS  Add one item in a todo at a time 
- PASS  Todo items should be a list

### Contract Tests
- PASS  should get list of todo items
- PASS  should create list of todo items

Test Suites: 6 passed, 6 total <br />
Tests:       12 passed, 12 total <br />
Snapshots:   0 total <br />
Time:        5.037 s <br />
Ran all test suites. <br />

### End to End Testing
Run this command for end to end testing
first start the application using:
`npm start`
cypress testing 
`npm run cypress:all`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Running Rest Api through Docker
The react todo application is dockerized and they can be run through these commands:
- `docker-compose -f docker-compose.dev.yml up -d --build`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors
- Syed Faisal Saleem 

