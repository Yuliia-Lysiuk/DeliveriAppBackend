const express = require('express');

const { joiSchema } = require('../../models/user');

const { users } = require('../../controls');

const { addValidation, ctrlWrapper } = require('../../middlewares');

const router = express.Router();

router.post('/orders', ctrlWrapper(users.get));

router.post('/', addValidation(joiSchema), ctrlWrapper(users.add));

module.exports = router;
