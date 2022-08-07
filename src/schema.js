const Joi = require('joi').extend(require('@joi/date'));

const schema = Joi.object({
  dob: Joi.date().timestamp().required()
});

module.exports = schema;
