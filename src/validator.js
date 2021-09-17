const Joi = require('joi')

exports.schema = Joi.object({
  directory: Joi.string().optional(),
  saveData: Joi.bool(),
  limitForConnections: Joi.number().min(1).max(15).optional(),
  limitForRedirects: Joi.number().min(0).max(10).optional(),
  rateLimit: Joi.number().min(0).max(3600000).optional(),
  timeout: Joi.number().min(0).max(60000).optional(),
  domain: Joi.string().domain().required(),
  headers: Joi.array().items(Joi.string().pattern(/^[\w\d_-]+:[\w\d_-]+$/)).optional()
})

exports.validate = function validate (schema, data) {
  const { error, value } = schema.validate(data)
  if (error) throw error

  return { value }
}
