const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, homeController.getHome);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// // router.get("/", homeController.getIndex);
// router.get("/home", homeController.getHome);
// // router.get("/login", getLogin);
// // router.post("/login", postLogin);
// // router.get("/signup", getSignup);
// // router.post("/signup", postSignup);


module.exports = router;
