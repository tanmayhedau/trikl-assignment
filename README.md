# Node.js Task README

## Introduction

This README provides instructions for setting up and running a Node.js application. Follow these steps to get your project up and running smoothly.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/): Make sure you have Node.js and npm installed on your system. You can download them from the official website.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required dependencies by running the following command in your terminal:

   ```bash
   npm install
   ```

## Configuration

To configure the application, you'll need to set up a MongoDB connection. Follow these steps:

1. Create a file named `.env` in the root directory of your project.

2. Inside the `.env` file, add the following line, replacing `<your-mongodb-uri>` with your MongoDB cluster URI:

   ```
   MONGO_URI=<your-mongodb-uri>
   ```

   Example:
   ```
   MONGO_URI=mongodb://localhost:27017/mydatabase
   ```

## Testing APIs

To facilitate testing, you can import the provided Postman collection. Follow these steps:

1. Import the Postman collection file into your Postman workspace.

2. You can now use Postman to interact with your APIs more easily, making testing and development more efficient.

## Running the Server

To start the Node.js server, use the following command in your terminal:

```bash
npm start
```

Your server should now be running and accessible at the specified port.
