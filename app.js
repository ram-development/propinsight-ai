const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const valuationRoutes = require('./routes/valuationRoutes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', valuationRoutes);

// Handle routes not found
app.use((req, res, next) => {
  logger.warn(`404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  logger.error(`Uncaught error: ${err.stack || err.message}`);
  res.status(500).json({ error: "Something went wrong!" });
});

// Starting the server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});