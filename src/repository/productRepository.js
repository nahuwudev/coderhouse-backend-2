import productDao from '../dao/productDao.js';

class ProductRepository {
  async getAllProducts() {
    return await productDao.getAllProducts();
  }

  async getProductById(id) {
    return await productDao.getProductById(id);
  }

  async updateProductStock(id, stock) {
    return await productDao.updateProductStock(id, stock);
  }

  async createProduct(productData) {
    return await productDao.createProduct(productData);
  }

  async deleteProduct(id) {
    return await productDao.deleteProduct(id);
  }
}

export default new ProductRepository();
