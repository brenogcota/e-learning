
const { getRepository } = require('typeorm');
const Course = require('../../entity/Course');

const index = async (req, res, next) => {
    try {
        const courseRepository = getRepository(Course);
        let course = await courseRepository.find();
    
        res.status(200).json(course);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    index
}