import express from "express"
import {
    getbestProducts,
    saveBestProduct,

    getProducts,
    getProductsById,
    getProductsByName,
    saveProducts,
    updateProducts,
    deleteProducts,

    getfeedback,
    saveFeedback,

    getOrder,
    saveOrder
} from "../controller/ProductController.js"

const router = express.Router()

router.get('/bestproduct', getbestProducts)
router.post('/bestproduct', saveBestProduct)

router.get('/products', getProducts)
router.get('/products/:id', getProductsById)
router.get('/products/:name', getProductsByName)
router.post('/products', saveProducts)
router.patch('/products/:id', updateProducts)
router.delete('/products/:id', deleteProducts)

router.get('/feedback', getfeedback)
router.post('/feedback', saveFeedback)

router.get('/order', getOrder)
router.post('/order', saveOrder)

export default router