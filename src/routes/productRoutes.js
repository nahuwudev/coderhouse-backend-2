import express from 'express';
import productController from '../controllers/productController.js';
import { authenticateJWT, isAdmin } from '../middlewares/authMiddleware.js'; // Middleware para autenticación si es necesario

const productRouter = express.Router();

// Obtener todos los productos
productRouter.get('/', productController.getAllProducts);

// Obtener un producto por ID
productRouter.get('/:id', productController.getProductById);

// Crear un nuevo producto (solo administradores, por ejemplo)
productRouter.post('/', authenticateJWT, isAdmin, productController.createProduct);

// Actualizar stock de un producto (solo administradores, por ejemplo)
productRouter.put('/:id/stock', authenticateJWT, isAdmin, productController.updateProductStock);

// Eliminar un producto (solo administradores, por ejemplo)
productRouter.delete('/:id', authenticateJWT, isAdmin, productController.deleteProduct);

export default productRouter;
