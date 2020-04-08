import * as Joi from '@hapi/joi';

export const configSchema = Joi.object({
  TEST_KEY: Joi.string().required(),
});
