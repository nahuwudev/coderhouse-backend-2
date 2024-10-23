import cartRepository from "../repository/cartRepository.js";
import ticketService from "../services/ticketService.js";
import productRepository from "../repository/productRepository.js"; // Repositorio para manejar productos

const addProductToCart = async (req, res) => {
  try {
    const { cid } = req.params; // Cart ID
    const { productId, quantity } = req.body; // Product data



    // Verificar si el producto existe y tiene suficiente stock
    const product = await productRepository.getProductById(productId);
    if (!product || product.stock < +quantity) {
      return res.status(400).json({ message: "Product out of stock or not found" });
    }

    // Añadir el producto al carrito
    const updatedCart = await cartRepository.addProductToCart(cid, productId, quantity);

    res.status(200).json({
      message: "Product added to cart",
      cart: updatedCart
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error adding product to cart", error });
  }
};

const removeProductFromCart = async (req, res) => {
  try {
    const { cid, productId } = req.params;
    const updatedCart = await cartRepository.removeProductFromCart(cid, productId);

    res.status(200).json({
      message: "Product removed from cart",
      cart: updatedCart
    });
  } catch (error) {
    res.status(500).json({ message: "Error removing product from cart", error });
  }
};

const viewCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const cart = await cartRepository.getCartById(cid);

    res.status(200).json({
      message: "Cart details",
      cart
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart details", error });
  }
};

const purchase = async (req, res) => {
  try {
    const { cid } = req.params; // Cart ID
    const cart = await cartRepository.getCartById(cid);

    // Finalizar la compra, verificando el stock y generando ticket
    const { purchasedProducts, failedProducts } = await cartRepository.finalizePurchase(cart);

    // Generar ticket solo si hubo productos comprados
    let ticket = null;
    if (purchasedProducts.length > 0) {
      ticket = await ticketService.generateTicket(cart.user, purchasedProducts);
    }

    res.status(200).json({
      message: "Purchase completed",
      ticket,
      failedProducts
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error completing purchase", error });
  }
};

export default { addProductToCart, removeProductFromCart, viewCart, purchase };
