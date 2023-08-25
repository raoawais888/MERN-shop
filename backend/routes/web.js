const router = require("express").Router();
const userController = require("../controllers/userController.js");
const BrandController = require("../controllers/brandController.js")
const categoryController = require("../controllers/categoryController.js")
const sizeController = require("../controllers/sizeController.js")

router.post("/register",userController.register);
router.post("/verify-otp",userController.verifyOTP);
router.post("/login",userController.auth);
router.post("/reset",userController.reset);
router.post("/password_reset",userController.password_reset);
router.post("/verify-token",userController.verify_token);
router.post("/users",userController.index);





// brand routes .............................................................
  
router.get("/brand",BrandController.index);
router.post("/add-brand",BrandController.addBrand);
router.post("/brand-delete",BrandController.delete);
router.post("/brand-edit",BrandController.edit);


// bcategory routes .............................................................

router.get("/category",categoryController.index);
router.post("/add-category",categoryController.store);
router.post("/delete-category",categoryController.delete);


// size  routes .............................................................
router.post("/add-size",sizeController.store);

module.exports = router;