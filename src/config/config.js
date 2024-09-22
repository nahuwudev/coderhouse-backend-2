import mongoose from 'mongoose'

const url = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log('MongoDB conectado correctamente :)')
    } catch (error) {
        console.error('Error al conectarMongoDB', error);
    }
}

export default connectDB;