const { EntitySchema } = require('typeorm');

const UserEntity = new EntitySchema({
    name: "User", 
    tableName: "user",
    columns: {
        id: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        ocuppation: {
            type: 'varchar'
        },
        image: {
            type: 'varchar'
        },
        userId: {
            type: 'varchar'
        },
        positionId: {
            type: 'varchar',
            nullable: true
        },
        created_at: {
            type: 'timestamp',
            default: 'now()'
        }
     },
    relations: {
        position: {
            target: "Position",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        },
        course: {
            target: "Course",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        }
    }
});

module.exports = UserEntity;