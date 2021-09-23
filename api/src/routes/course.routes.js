const express = require('express');
const CourseService = require('../services/Course');

const route = express.Router();

route.post('/', CourseService.create);
route.get('/:course', CourseService.show);

module.exports = route;