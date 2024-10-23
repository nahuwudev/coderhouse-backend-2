import userDao from '../dao/userDao.js';

class UserRepository {
  async createUser(data) {
    return await userDao.createUser(data);
  }

  async getUserByEmail(email) {
    return await userDao.getUserByEmail(email);
  }
}

export default new UserRepository();
