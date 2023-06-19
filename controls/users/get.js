const { User } = require('../../models');

const get = async (req, res, next) => {
  const { email, phone } = req.body;

  const orders = await User.find({ email, phone }, '', {});
  res.json({
    status: 'success',
    code: 200,
    data: { result: orders },
  });
};
module.exports = get;
