const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./user")



router.use("/recipes", recipeRoutes);
router.use("/user", userRoutes);

module.exports = router;
