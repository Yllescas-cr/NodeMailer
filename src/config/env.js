"use strict";

const assert = require("assert");
const dotenv = require("dotenv");

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const {
   PORT,
   HOST,
   MAIL,
   PASS,
   REMAIL
} = process.env;

// validate the required configuration information
assert(PORT, "PORT configuration is required.");
assert(HOST, "HOST configuration is required.");
assert(MAIL, "EMAIL configuration is required.");
assert(PASS, "PASS configuration is required.");



// export the configuration information
module.exports = {
   port: PORT,
   host: HOST,
   email:MAIL,
   password:PASS,
   rmail:REMAIL
};
