
const { getRepository, Like } = require('typeorm');
const Course = require('../../entity/Course');

const index = async (req, res, next) => {
    try {
        const courseRepository = getRepository(Course);
        const name = req.params.course;

        let course = await courseRepository.findOne({ where: { name }, relations: ['user']});
    
        if(!course) return res.status(404).json([]);

        course = {
            ...course,
            author: course.user
        }

        delete course.user;
        res.status(200).json(course);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    index
}