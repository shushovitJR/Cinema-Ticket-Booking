const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to My Web App Everyone!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});