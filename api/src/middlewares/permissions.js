const { getRepository } = require('typeorm');
const User = require('../entity/User');

const isAdmin = async (req, res, next) => {
    try {
        const { userId } = req;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['position'] });
        if(!user) return res.status(404).json({ message: 'User does not exists.' });

        const { position } = user; 
        if(!position || position.name != 'ADMIN') return res.status(401).json({ message: 'You need admin privileges to perform this action.' });
    
        next();
    } catch (error) {
        next(err)
    }
}


module.exports = { 
    isAdmin
};