import cartDao from '../dao/cartDao.js';
import productDao from '../dao/productDao.js';

class CartRepository {
  async finalizePurchase(cart) {
    const purchasedProducts = [];
    const failedProducts = [];

    for (const item of cart.products) {
      const product = await productDao.getProductById(item.product);
      if (product.stock >= item.quantity) {
        await productDao.updateProductStock(product._id, product.stock - item.quantity);
        purchasedProducts.push(item);
      } else {
        failedProducts.push(item);
      }
    }

    return { purchasedProducts, failedProducts };
  }

  async getCartById(cid) {
    return await cartDao.getCartById(cid);
  }

  async addProductToCart(cartId, productId, quantity) {
    return await cartDao.addProductToCart(cartId, productId, quantity);
  }

  async removeProductFromCart(cartId, productId) {
    return await cartDao.removeProductFromCart(cartId, productId);
  }
}

export default new CartRepository();
