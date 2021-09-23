const typeorm = require('typeorm');
const dbConfig = require('../config');
const User = require('../../entity/User');
const Position = require('../../entity/Position');
const Course = require('../../entity/Course');

typeorm.createConnection({
    ...dbConfig,
    synchronize: true,
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