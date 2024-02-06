# Express-Sequelize-Auth

Express-Sequelize-Auth is a customizable and secure Express.js template for starting new web applications with authentication features. This project uses the Sequelize ORM for managing a database, bcrypt for password hashing, express validator, and JWT tokens for user authentication.

## Features

User authentication with JWT tokens
Password hashing with bcrypt
Sequelize ORM for database management
Customizable routes and middleware
Basic error handling
CORS configuration for cross-origin requests

## Installation

1. Clone the repository:
git clone https://github.com/akramshekh/express-sequelize-auth.git

2. Install dependencies:
npm install

3. Set up environment variables:

Rename .env-example to .env and add your environment variables.

4. Run the application:
npm start

## Usage

By default, the application will run on port 3000. You can modify this in the index.js file.

This template includes basic authentication routes for registering new users and logging in. You can modify these routes and middleware to fit your own application's needs.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
MIT