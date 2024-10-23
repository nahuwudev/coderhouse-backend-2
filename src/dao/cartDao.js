import Cart from "../models/Cart.js";

class CartDao {
  async getCartById(id) {
    return await Cart.findById(id).populate("products.product");
  }

  async updateCart(id, updatedCart) {
    return await Cart.findByIdAndUpdate(id, updatedCart, { new: true });
  }

  async clearCart(id) {
    return await Cart.findByIdAndUpdate(id, { products: [] }, { new: true });
  }

  // Nueva función para añadir producto al carrito
  async addProductToCart(cartId, productId, quantity) {
    const cart = await Cart.findById(cartId);
    if (!cart) throw new Error("Cart not found");

    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
    
    if (productIndex > -1) {
      // Si el producto ya está en el carrito, incrementamos la cantidad
      cart.products[productIndex].quantity += quantity;
    } else {
      // Si no está, lo añadimos
      cart.products.push({ product: productId, quantity });
    }

    return await cart.save();
  }

  // Nueva función para eliminar producto del carrito
  async removeProductFromCart(cartId, productId) {
    const cart = await Cart.findById(cartId);
    if (!cart) throw new Error("Cart not found");

    cart.products = cart.products.filter(p => p.product.toString() !== productId);
    
    return await cart.save();
  }
}

export default new CartDao();
