const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
<<<<<<< HEAD
const postsController = require("../controllers/post");
=======
// const postsController = require("../controllers/post");
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
<<<<<<< HEAD
router.get("/home", postsController.getHome);
router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);
router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);

=======
// router.get("/login", authController.getLogin);
// router.get("/signup", authController.getSignup);
router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);
>>>>>>> 64ad0cf4dcb8a471cc0ea314d6c62715f65cad08




module.exports = router;
