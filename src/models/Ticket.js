import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    code: {type: String, unique: true},
    purchase_datatime: {type: Date, default: Date.now},
    amount: Number,
    purchaser: String, // email del usuario aqui...
})

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;