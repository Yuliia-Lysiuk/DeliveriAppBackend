const { User } = require('../../models');

const add = async (req, res, next) => {
  const { _id } = req.user;
  const result = await User.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  });
};
module.exports = add;
