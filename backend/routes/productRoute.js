const express = require("express");
const { getAllProduct, createProduct, upadateProduct, deleteProduct, getSingleProduct } = require("../controller/productController");


const router = express.Router();


router.route("/products").get(getAllProduct);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(upadateProduct).delete(deleteProduct).get(getSingleProduct);

module.exports = router;
