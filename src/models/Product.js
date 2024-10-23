import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
})

const Product = mongoose.model('Product', productSchema);

export default Product;