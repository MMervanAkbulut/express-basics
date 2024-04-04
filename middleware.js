const accessControl = (req, res, next) => {
  const access = true; // true yazarsak next ile devam eder.
  if (!access) {
    res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }

  console.log("Middleware: Access Control");
  next();
};

const defaultMiddleware = (req, res, next) => {
  console.log("Default Middleware.");
  next();
};

module.exports = {
  accessControl,
  defaultMiddleware,
};
