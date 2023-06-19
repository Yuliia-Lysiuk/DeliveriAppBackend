const { User } = require('../../models');

const add = async (req, res, next) => {
  console.log(req.body);
  const result = await User.create({ ...req.body });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {},
  });
};
module.exports = add;
