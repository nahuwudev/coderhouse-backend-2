import User from '../models/User'

class UserDao {
    async createUser(data) {
        const user = new User(data);
        return await user.save()
    }

    async getUserByEmail(email) {
        return await User.findOne({email})
    }
}

export default new UserDao();