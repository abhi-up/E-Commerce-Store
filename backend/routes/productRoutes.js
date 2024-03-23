import express from "express"
import formidable from "express-formidable"
const router = express.Router()

// controllers
import {
    addProduct,
    updateProductDetails,
    removeProduct,
    fetchProducts,
    fetchProductById,
} from "../controllers/productController.js"
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js"
import checkId from "../middlewares/checkId.js"

router
    .route("/")
    .get(fetchProducts)
    .post(authenticate, authorizeAdmin, formidable(), addProduct)

router
    .route("/:id")
    .get(fetchProductById)
    .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
    .delete(authenticate, authorizeAdmin, removeProduct)

export default router
