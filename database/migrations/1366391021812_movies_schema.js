'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesSchema extends Schema {
    up() {
        this.create('movies', (table) => {
            table.uuid('id').primary();
            table.string('name', 20).notNullable();
            table.text('description').notNullable();
            table.text('img').notNullable();
            table.integer('status_id', 2).unsigned().notNullable().defaultTo(1);
            table.foreign('status_id')
                .references('id')
                .inTable('status')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.json('data').nullable();
            table.timestamps()
        })
    }

    down() {
        this.drop('movies')
    }
}

module.exports = MoviesSchema