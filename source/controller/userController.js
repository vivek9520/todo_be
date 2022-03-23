const User = require("../model/user");

module.exports.signup = async (req, res, next) => {
  console.log(req.body.email);
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
