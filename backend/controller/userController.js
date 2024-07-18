const catchAsyncError = require("../middleware/catchAsyncError");
const errorHandler = require("../middleware/error");
const User = require("../models/userModel");

// resistor user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email,password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a smaple id",
      url: "this is sample url",
    },
  });

  const token  = user.getJwtToken();
  
  res.status(201).json({
    success:true,
     token,
  })

});
