const asyncHandler = (requestHandler) => {
  return (err, req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// A higher-order function that wraps an asynchronous route handler in a try-catch block.
//   It ensures that any errors thrown in the asynchronous handler are caught and passed
//   to the Express error-handling middleware.

module.exports = asyncHandler;
