import Ticket from '../models/Ticket.js';
import generateCode from '../utils/generateCode.js';

class TicketService {
  async generateTicket(user, products) {
    const totalAmount = products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const ticket = new Ticket({
      code: generateCode(),
      amount: totalAmount,
      purchaser: user.email,
    });

    return await ticket.save();
  }
}

export default new TicketService();
