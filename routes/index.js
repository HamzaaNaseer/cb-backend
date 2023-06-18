const router = require("express").Router();
const userRoutes = require("./api/userRoutes");

//http://localhost:8080/user/....

//router.use("/order", ordersRoutes);

router.use("/user", userRoutes);


module.exports = router;
