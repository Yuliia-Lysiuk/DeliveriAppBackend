const { Schema, model } = require('mongoose');
const Joi = require('joi');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for user'],
      minlength: 2,
      maxlength: 15,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: [true, 'Set name for contact'],
      minlength: 3,
      maxlength: 300,
    },
    order: [
      {
        name: String,
        price: Number,
        weight: Number,
        url: String,
        qty: Number,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),

  phone: Joi.required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  address: Joi.string().min(3).max(300).required(),
  order: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      price: Joi.number(),
      weight: Joi.number(),
      url: Joi.string(),
      qty: Joi.number(),
    })
  ),
});

const User = model('user', userSchema);

module.exports = { User, joiSchema };
