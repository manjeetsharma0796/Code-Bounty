// api/index.js

const express = require('express');
const { createApp1 } = require('./src/backend');

compilex.init({
  tempDir: '/tmp'
});
// Create the Express app instance
const app1 = createApp1();

// Vercel expects an exported function, so we need to use this format.
module.exports = (req, res) => {
  app1(req, res); // Pass the request and response to Express
};
