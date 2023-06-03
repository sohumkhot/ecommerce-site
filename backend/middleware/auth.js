const catchAsyncErrors = require('./catchAsyncErrors');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const cookies = req.cookies;

  if (!cookies.token) {
    return next(new ErrorHandler('Please Login to access this resource', 401));
  }

  const decodedData = jwt.verify(cookies.token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});
