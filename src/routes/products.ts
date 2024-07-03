import express from "express";

import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  getSingleProduct,
  getLatestProducts,
  newProduct,
  getAllCategories,
  getAdminProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/product.js";

const app = express.Router();

// to create new product -  api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

// To get last 10 Products -  api/v1/product/latest
app.get("/latest", getLatestProducts);

// To getAll Products with filters -  api/v1/product/latest
app.get("/all", getAllProducts);

// To get all unique Categories - api/v1/product/categories
app.get("/categories", getAllCategories);

// To get All Products - api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProduct);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
