const express = require("express");
const router = express.Router();
// const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
// const postsController = require("../controllers/post");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", 



module.exports = router;
