
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const Course = require('../../entity/Course');

const slugfy = require('../../utils/slugfy');
const logger = require('../../infra/logger');

const index = async (req, res, next) => {
    try {
        const courseRepository = getRepository(Course);
        let courses = await courseRepository.find({ relations: ['user']});
        if(!courses) return res.status(404).json([]);

        res.status(200).json(courses);
    } catch (err) {
        next(err)
    }
}

const show = async (req, res, next) => {
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

const create = async (req, res, next) => {
    try {
        const { name, details, lessons, userId } = req.body;

        const courseRepository = getRepository(Course);
        let course = await courseRepository.findOne({ where: { name } });

        if(course) return res.status(403).json({ message: 'Course already exists.' });

        course = {
            id: v4(),
            name: slugfy(name),
            details,
            lessons,
            userId
        }

        course = await courseRepository.save(course);

        res.status(200).json(course);
    } catch(err) {
        logger.error(err);
        next(err);
    }
}

module.exports = {
    index,
    show,
    create
}