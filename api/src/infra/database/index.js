const typeorm = require('typeorm');
const dbConfig = require('../config');
const User = require('../../entity/User');
const Position = require('../../entity/Position');
const Course = require('../../entity/Course');

typeorm.createConnection({
    ...dbConfig,
    synchronize: false,
    entities: [
        User,
        Position,
        Course
    ],
    migrations: ['./migration/*.js'],
    cli: {
        migrationsDir: 'migration'
    }
});