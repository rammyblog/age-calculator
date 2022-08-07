const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: 'You have exceeded the 3 requests in 60 secs limit!',
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = rateLimiter;
