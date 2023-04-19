const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(418).send("<h1>418 I'm a teapot.</h1>");
});

module.exports = router;