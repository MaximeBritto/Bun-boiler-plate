#NodeJS boilerplate

This project present some diffrents features with NODEJS and with this project you have the base to create a back project 

You can find some feature integreted on the repos


### Features

## bcrypt (Version 5.1.1)

Bcrypt is a password-hashing library used for securely storing user passwords in a hashed format. It helps protect user data from unauthorized access.

## body-parser (Version 1.20.2)

Body-parser is middleware for Express.js that parses incoming HTTP request bodies. It simplifies handling data from forms and client requests.

## cors (Version 2.8.5)

CORS (Cross-Origin Resource Sharing) is a middleware that enables controlled access to resources on a web page from different domains. It's essential for managing security in web applications.


## express (Version 4.18.2)

Express is a popular web application framework for Node.js. It simplifies building robust and scalable web applications by providing routing, middleware, and other essential features.

## jsonwebtoken (Version 9.0.2)

JSON Web Tokens (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The jsonwebtoken library facilitates JWT creation and validation in Node.js applications.

## mongoose (Version 7.6.2)

Mongoose is an ODM (Object-Document Mapping) library for MongoDB and Node.js. It simplifies database interactions by providing a schema-based solution for working with MongoDB.

## mongoose-unique-validator (Version 4.0.0)

Mongoose Unique Validator is a plugin for Mongoose that simplifies the handling of unique constraints for fields in MongoDB documents.

## nodemon (Version 3.0.1)

Nodemon is a development tool that monitors changes in your Node.js application files and automatically restarts the server, making the development process more 
efficient.

### Some other dependencies

## depcheck (Version 1.4.7)

Depcheck is a tool used to analyze the dependencies in a Node.js project. It helps identify unused or unnecessary dependencies, keeping the project lean.

# To use :
- use command in terminal "npm depcheck" (you can add folder where you can ignore some file if you dont want verify specifically)
## dotenv (Version 16.3.1)

Dotenv is a module for loading environment variables from a .env file into your Node.js application. It's useful for managing configuration settings.
# To use :
- Create a file .env and in this folder you can for exemple create a variable to remplace your Data base url
- you can see in "index.js" i put the command "process.env.MONGO_URL"
## jest (Version 29.7.0)

Jest is a JavaScript testing framework widely used for writing and running unit tests and integration tests in Node.js and front-end JavaScript applications.
# To use :
- Create a file .test to put a founction you want to test
-  use command in terminal "npm test" i put a little founction to success a test

## passport (Version 0.6.0)

Passport is a popular authentication middleware for Node.js that simplifies the process of implementing authentication and authorization in web applications.

## passport-jwt (Version 4.0.1)

Passport JWT is an extension of the Passport library, specifically designed for working with JSON Web Tokens (JWT) as an authentication strategy in Node.js applications.
# To use :
- Here i try to use passport to remplace my actual middleware i let the code in comment 