const express = require("express");
const { getAllProduct, createProduct, upadateProduct } = require("../controller/productController");


const router = express.Router();


router.route("/products").get(getAllProduct);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(upadateProduct);

module.exports = router;
