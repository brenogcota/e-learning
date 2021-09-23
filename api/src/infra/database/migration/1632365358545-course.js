const { Table, TableForeignKey } = require('typeorm');

module.exports = class course1632365358545 {

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'course',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'details',
                    type: 'json'
                },
                {
                    name: 'lessons',
                    type: 'json',
                    array: true 
                },
                {
                    name: 'userId',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }), true);

        await queryRunner.createForeignKey('course', new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE'
        }));
    }

    async down(queryRunner) {
        const userForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('userId') !== -1);
        await queryRunner.dropForeignKey('course', userForeignKey);
        await queryRunner.dropColumn('course', 'userId');
        await queryRunner.dropTable('course');
    }
}
        