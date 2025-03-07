# Node-Express-Example

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Setup and Creation](#project-setup-and-creation)
   - [Initialize the Project](#initialize-the-project)
   - [Install Dependencies](#install-dependencies)
   - [Add Scripts to `package.json`](#add-scripts-to-packagejson)
3. [Installation and Running the Application](#installation-and-running-the-application)
   - [How to Download and Set Up](#how-to-download-and-set-up)
   - [How to Run the Application](#how-to-run-the-application)
     - [Development Mode](#development-mode)
     - [Production Mode](#production-mode)
4. [Package Configuration (`package.json`)](#package-configuration-packagejson)
   - [Dependencies](#dependencies)
   - [Scripts](#scripts)
5. [Server Code Explanation (`server.js`)](#server-code-explanation-serverjs)
   - [Importing Express and Initializing the App](#importing-express-and-initializing-the-app)
   - [Setting the Port](#setting-the-port)
   - [Middleware Configuration](#middleware-configuration)
   - [Defining API Endpoints](#defining-api-endpoints)
   - [Starting the Server](#starting-the-server)
6. [Testing the API](#testing-the-api)
   - [Install Testing Dependencies](#install-testing-dependencies)
   - [Add Test Script to `package.json`](#add-test-script-to-packagejson)
   - [Write Tests](#write-tests)
   - [Run Tests](#run-tests)
7. [Summary](#summary)

## Project Overview
<b>Node-Express-Example</b> is a simple project demonstrating how to create a RESTful API using Express. It covers basic concepts such as setting up dependencies, configuring the server, handling different types of HTTP requests (GET, POST), and managing parameters through the URL path, query string, and request body.


## Project Setup and Creation
Before you begin coding, you need to create the project from scratch. Here are the steps:

### Initialize the Project:

Open your terminal and create a new project folder.
Navigate to the folder and run:

```
npm init
```
This command creates a `package.json` file. You can press Enter to accept default values or provide custom details.

### Install Dependencies:

- Install Express by running:

```bash
npm install express --save
```
Express is the framework used to build the RESTful API

- Install Nodemon (a tool to automatically restart your server during development):

```bash
npm install nodemon --save-dev
```
This command saves nodemon as a development dependency.
- Project Files:

Create your server file (e.g., server.js or index.js).
Write your server code (as detailed later) to define routes and middleware.

### Add Scripts to `package.json`:

Modify the scripts section to add commands for starting your application:

```bash
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node index.js",
  "dev": "nodemon server.js"
}
```
- <b>start:</b> Runs the application using Node.js.
- <b>dev:</b> Runs the application with nodemon for development.



## Installation and Running the Application

### How to Download and Set Up
1. **Clone or Download the Repository:**

If you have a repository (e.g., on GitHub), you can clone it using:

```bash
git clone https://github.com/yourusername/Node-Express-Example.git
```
Alternatively, download the ZIP file from the repository and extract it to your local machine.

 2. **Install Dependencies:**

- Navigate into the project folder and install the required packages by running:
```bash
npm install
```
- This command reads the package.json file and installs all listed dependencies (Express and nodemon).




### How to Run the Application
#### Development Mode

```bash
npm run dev

```

This will start the server using nodemon, which will automatically reload the server whenever you make changes to your code.

#### Production Mode
```bash
npm start
```
This will run the application with Node.js without the automatic reloading provided by nodemon.


## Package Configuration (package.json)
Your package.json file outlines the project’s dependencies and scripts.

```bash
{
  "dependencies": {
    "express": "^4.21.2",
    "nodemon": "^3.1.9"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon server.js"
  }
}

```

### Depedencies

- <b>express:</b>
A popular web framework for Node.js that simplifies the creation of web servers and APIs. It provides an easy-to-use routing system and middleware support.

- <b>nodemon:</b>
A development tool that automatically restarts your server whenever file changes in the directory are detected. This makes the development process more efficient because you don’t have to manually restart the server after every change.


### Scripts
- <b>test:</b>
A placeholder command that prints an error message indicating no tests are specified. This can be replaced later if you decide to add testing.

- <b>start:</b>
Runs the application using Node.js by executing node index.js. This script is used for running the application in production or when you don’t need automatic restarts.

- <b>dev:</b>
Runs the application using nodemon by executing nodemon server.js. Use this command during development to benefit from automatic server restarts upon code changes.


## Server Code Explanation (server.js)
The server code is where the API endpoints are defined. Below is the code along with an explanation of each section:
```bash
const express = require("express");
const app = express();

const PORT = 2005

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ msg: "Hello World!!!" })
})

// Path Parameters
app.get("/greet/:name", (req, res) => {
    const { name } = req.params
    res.json({ msg: `Hello ${name}!` })
})

// Body Parameters
app.post("/greet", (req, res) => {
    const { name, age } = req.body
    res.json({ msg: `Hello my name is ${name} and im ${age} years old.` })
})

// Query Params
app.get("/greeting", (req, res) => {
    const { name, age } = req.query
    res.json({ msg: `Hello my name is ${name} and im ${age} years old.` })
})

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT)
})

```

### Detailed Breakdown
#### 1. Importing Express and Initializing the App
```bash
const express = require("express");
const app = express();

```
- What it does:
Imports the Express module and creates an instance of an Express application. This app object will be used to set up routes and middleware

#### 2. Setting the Port
```bash
const PORT = 2005

```
- What it does:
Defines a constant PORT where the server will listen for incoming requests. In this example, the server will run on port 2005.

#### 3. Middleware Configuration

```bash
app.use(express.json())

```

- What it does:
Registers middleware to parse incoming JSON payloads. This allows the API to automatically convert JSON in the request body into a JavaScript object that can be accessed via req.body.

#### 4. Definige API Endpoints

- <b>Root Endpoint(GET '/'):</b>
```bash
app.get("/", (req, res) => {
    res.json({ msg: "Hello World!!!" })
})
```
- Explanation:</br>
This is the simplest endpoint which responds to a GET request at the root URL (/). It sends back a JSON response containing the message "Hello World!!!".

- <b>Path Parameters (GET /greet/:name):</b>
```bash
app.get("/greet/:name", (req, res) => {
    const { name } = req.params
    res.json({ msg: `Hello ${name}!` })
})

```
- Explanation:</br>
This route demonstrates the use of path parameters. The :name in the URL is a placeholder that captures a segment of the URL and assigns it to req.params.name. The server then uses this value to customize the greeting message.

- <b>Body Parameters (POST /greet):</b>

```bash
app.post("/greet", (req, res) => {
    const { name, age } = req.body
    res.json({ msg: `Hello my name is ${name} and im ${age} years old.` })
})

```
- Explanation:</br>
This endpoint handles POST requests. It expects the incoming request to have a JSON body containing name and age. These values are extracted from req.body and used to generate a personalized greeting.

- <b>Query Parameters (GET /greeting):</b>

```bash
app.get("/greeting", (req, res) => {
    const { name, age } = req.query
    res.json({ msg: `Hello my name is ${name} and im ${age} years old.` })
})

```

- Explanation:</br>
This route uses query parameters. When a request is made to /greeting?name=John&age=30, the parameters are accessible via req.query. The server uses these query values to form a greeting message.



#### 5. Starting the Server

```bash
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT)
})

```

- What it does:</br>
Starts the server on the specified port (2005 in this case). The callback function logs a message to the console, confirming that the server is running and indicating where it can be accessed.

## Testing The API
In this section, we will add test cases to ensure the API works as expected. We will use **Jest** and **Supertest** to write the tests.

### Install Testing Depedenies
Before you start writing tests, you need to install **Jest** and **Supertest**. Jest will be used as the testing framework, and Supertest will be used to simulate HTTP requests to the Express server.

Run the following command to install the dependencies:

```bash
npm install --save-dev jest supertest
```


- `jest`: A JavaScript testing framework used for writing and running tests.
- `supertest`: A library to test HTTP servers, making it easier to send requests and inspect responses.

### Add Test Script to `package.json`
Next, add a `test` script to your `package.json` file. This script will allow you to run your tests with a single command.

In the `scripts` section of `package.json`, add:
```bash
 "scripts": {
    "test": "jest",
    "start": "node index.js",
    "dev": "nodemon server.js"
  }

```
- The `test` script runs `jest`, which will look for files with `.test.js` or `.spec.js` extensions and execute the tests inside them.

### Write Tests
Now, create a `tests` folder in your project root, and add a test file (e.g., `index.test.js`). Inside the test file, write the following test cases:

#### Test Case 1: Test Root Endpoint
```javascript
const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("should return Hello World!!!", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: "Hello World!!!" });
  });
});
```
- **Explanation:**
    - This test checks that a `GET` request to the root endpoint (`/`) returns a `200` status code and a JSON response with the message `"Hello World!!"`.


 #### Test Case 2: Test Path Parameters  
```javascript
describe("GET /greet/:name", () => {
  const names = ["Dimitris", "Sakis", "Alekos"];
  for (const name of names) {
    it(`Should greet ${name} with the correct message`, async () => {
      const response = await request(app).get(`/greet/${name}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ msg: `Hello ${name}!` });
    });
  }
});
```

- **Explanation:**
    - This test checks that a `GET` request to `/greet/:name` correctly greets the user by their name. It tests multiple names to ensure the route works for different input.

#### Test Case 3: Test Query Parameters

```javascript
describe("GET /greeting", () => {
  const users = [
    { name: "John", age: 35 },
    { name: "Alice", age: 30 },
    { name: "Tom", age: 55 }
  ];

  users.forEach((user) => {
    it(`Should greet ${user.name} with age ${user.age}`, async () => {
      const response = await request(app).get(`/greeting?name=${user.name}&age=${user.age}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        msg: `Hello my name is ${user.name} and I'm ${user.age} years old.`
      });
    });
  });
});
```
- **Explanation:**
    - This test checks that a `GET` request to `/greeting?name=<name>&age=<age>` returns the correct greeting message with query parameters.

#### Test Case 4: Test Body Parameters
```javascript
describe("POST /greet", () => {
  const users = [
    { name: "John", age: 35 },
    { name: "Alice", age: 30 },
    { name: "Tom", age: 55 }
  ];

  users.forEach((user) => {
    it(`should greet ${user.name} with age ${user.age}`, async () => {
      const response = await request(app).post("/greet").send({ name: user.name, age: user.age });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        msg: `Hello my name is ${user.name} and I'm ${user.age} years old.`
      });
    });
  });
});
```
- **Explanation:**
    - This test checks that a `POST` request to `/greet` with a JSON body containing name and age returns the correct greeting message.


### Run Tests
To run your tests, use the following command in the terminal:

```bash
npm test
```

- This command will run `Jest`, which will automatically find and execute all the tests in your project that are located in files with `.test.js` extensions.

If the tests pass successfully, you will see a message in the terminal indicating that all tests have passed. If there are any errors, Jest will display detailed error messages to help you debug.

## Summary
This documentation provides a comprehensive walkthrough of the Node-Express-Example project:

- <b>Project Overview:</b> Introduces the RESTful API project built with Express.
- <b>Project Setup and Creation:</b> Describes how to initialize the project using `npm init`, install dependencies, and set up the basic project structure.
- <b>Installation and Running the Application:</b> Guides you through cloning/downloading the project, installing dependencies with npm install, and running the server in both development and production modes.
- <b>Package Configuration:</b> Explains the contents of the package.json file, including dependencies and scripts.
-<b>Server Code Explanation:</b> Breaks down each part of the server code, detailing how routes and middleware work.
This guide is meant to help beginners understand not only how the code functions but also how to set up and manage a Node.js project using Express. Happy coding!




