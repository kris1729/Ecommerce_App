const Product = require("../models/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const errorHandler = require("../middleware/error");
const ApiFeaters = require("../utils/apiFeaters");

// create product--Admin

exports.createProduct = catchAsyncError(async (req, res, next) => {
   const product = await Product.create(req.body);
   res.status(201).json({
      success: true,
      product,

   })
})

// get all product 
exports.getAllProduct = catchAsyncError(async (req, res) => {

   const ApiFeater = new ApiFeaters(Product.find(),req.query).search().filter();
   const products = await ApiFeater.query;
   res.status(200).json({
      success: true,
      products,

   })
});
 
// Upadate Product by id ---Admin

exports.upadateProduct = catchAsyncError(async (req, res, next) => {
   let product = await Product.findById(req.params.id);

   if (!product) {
      return next(new errorHandler("Product is not found ", 404));
   }

   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
   });

   res.status(200).json({
      success: true,
      product,
   });
});

// Delete Product ---  Admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {

   const deletedProduct = await Product.findByIdAndDelete(req.params.id);
   if (!deletedProduct) {
      return next(new errorHandler("Product is not found ", 404));
   }

   res.status(200).json({ success: true, message: 'Product deleted successfully' });
});


// get single product.

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
   const product = await Product.findById(req.params.id);
   if (!product) {
      return next(new errorHandler("Product is not found ", 404));
   }
   res.status(200).json({
      success: true,
      product,
   })
});