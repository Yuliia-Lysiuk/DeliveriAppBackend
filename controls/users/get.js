const { User } = require('../../models');

const get = async (req, res, next) => {
  const { name, phone } = req.user;

  const user = await User.find({ name, phone }, '', {});
  res.json({
    status: 'success',
    code: 200,
    data: { result: user },
  });
};
module.exports = get;
