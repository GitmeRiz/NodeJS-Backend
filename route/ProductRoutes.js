import express from "express"
import {
    getbestProducts,
    saveBestProduct,

    getProducts,
    getProductsById,
    saveProducts,
    updateProducts,
    deleteProducts,

    getfeedback,
    saveFeedback
} from "../controller/ProductController.js"

const router = express.Router()

router.get('/bestproduct', getbestProducts)
router.post('/bestproduct', saveBestProduct)

router.get('/products', getProducts)
router.get('/products/:id', getProductsById)
router.post('/products', saveProducts)
router.patch('/products/:id', updateProducts)
router.delete('/products/:id', deleteProducts)

router.get('/feedback', getfeedback)
router.post('/feedback', saveFeedback)

export default router