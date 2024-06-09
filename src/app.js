const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit');
const morgan = require('morgan')

const { responseWrapper, exceptionHandler } = require('./middlewares');
const { authRouter, gameRouter } = require('./routers');
const { connectDB } = require('./utils');

// connect to database
connectDB();

// initialize express app
const app = express();

// Log HTTP requests
const logger = morgan('combined');
app.use(logger);

// Middlewares
app.use(helmet());
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());

// response wrapper
app.use(responseWrapper);

// Routes
app.use('/api/auth', authRouter);
app.use('/api', gameRouter);

// Exception Handler
app.use(exceptionHandler);

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

module.exports = app;
