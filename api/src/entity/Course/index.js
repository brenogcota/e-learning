const { EntitySchema } = require('typeorm');

const CourseEntity = new EntitySchema({
    name: "Course", 
    tableName: "Course",
    columns: {
        id: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        details: {
            type: 'json'
        },
        lessons: {
            type: 'json',
            array: true
        },
        userId: {
            type: 'varchar'
        },
        created_at: {
            type: 'timestamp',
            default: 'now()'
        }
     },
    relations: {
        user: {
            target: "User",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        }
    }
});

module.exports = CourseEntity;