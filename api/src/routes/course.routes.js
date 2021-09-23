const express = require('express');
const CourseService = require('../services/Course');

const route = express.Router();

route.get('/:course', CourseService.index);

module.exports = route;