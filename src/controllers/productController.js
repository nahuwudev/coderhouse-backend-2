import productRepository from '../repository/productRepository.js';

const getAllProducts = async (req, res) => {
  try {
    const products = await productRepository.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productRepository.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

const updateProductStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { stock } = req.body;
    const updatedProduct = await productRepository.updateProductStock(id, stock);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product stock', error });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const newProduct = await productRepository.createProduct({ name, price, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productRepository.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};

export default { getAllProducts, getProductById, updateProductStock, createProduct, deleteProduct };
