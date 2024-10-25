# React Apps

## Prerequisites

### Local Machine Dependencies

### 1. Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

npm is the package manager for the Node JavaScript platform.
create-react-app command

Included in npm is Create React App(opens in a new tab), which is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

### 2. Install [Node](https://nodejs.org/en)

Node.js is a free, open source, cross-platform JavaScript run-time environment that lets developers write command-line tools and server-side scripts (i.e., outside of a browser).

### 3. Testing

### 3.1. Install [Jest](https://jestjs.io/)

Jest is a testing framework to test Javascript and React code.

### 3.2. Installing [React-Testing-Library](https://github.com/testing-library/react-testing-library) (if not using create-react-app):

```
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

#### package.json

After installing Jest, the `package.json` file need to be updated to include a script section so that we can run the Jest tests through npm:

```
{
"devDependencies": {
"jest": "^27.4.5"
},
"scripts": {
"test": "jest"
}
}
```
