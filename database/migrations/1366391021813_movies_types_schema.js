'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusSchema extends Schema {
    up() {
        this.create('movies_types', (table) => {
            table.increments('id').primary();
            table.integer('status_id', 2).unsigned().notNullable().defaultTo(1);
            table.foreign('status_id')
                .references('id')
                .inTable('status')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.uuid('movie_id').unsigned().notNullable().defaultTo(1);
            table.foreign('movie_id')
                .references('id')
                .inTable('movies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('type_movie_id').unsigned().notNullable().defaultTo(1);
            table.foreign('type_movie_id')
                .references('id')
                .inTable('types_movies')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.timestamps()
        })
    }

    down() {
        this.drop('movies_types')
    }
}

module.exports = StatusSchema