import Product from '../models/Product.js';

class ProductDao {
  async getAllProducts() {
    return await Product.find();
  }

  async getProductById(id) {
    return await Product.findById(id);
  }

  async updateProductStock(id, stock) {
    return await Product.findByIdAndUpdate(id, { stock }, { new: true });
  }

  async createProduct(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

export default new ProductDao();
