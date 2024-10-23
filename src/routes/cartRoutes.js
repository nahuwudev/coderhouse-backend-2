import express from 'express';
import cartController from '../controllers/cartController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js'

const cartRouter = express.Router();

// Ruta para ver el carrito
cartRouter.get('/:cid', authenticateJWT, cartController.viewCart);

// Ruta para añadir productos al carrito
cartRouter.post('/:cid', authenticateJWT, cartController.addProductToCart);

// Ruta para eliminar productos del carrito
cartRouter.delete('/:cid/products/:productId', authenticateJWT, cartController.removeProductFromCart);

// Ruta para finalizar la compra
cartRouter.post('/:cid/purchase', authenticateJWT, cartController.purchase);

export default cartRouter;
