import 'dotenv/config'
import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import connectDB from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import productRouter from './routes/productRoutes.js';

const app = express();

// Conectar a MongoDB
connectDB()

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api/session", authRoutes);
app.use("/api/session/cart", cartRouter);
app.use("/api/products", productRouter)

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

export default app;