import express from "express";
import { registerUser, loginUser, currentUser } from "../controllers/authController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const  router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', authenticateJWT, currentUser);

export default router;