'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusSchema extends Schema {
  up () {
    this.create('products_types', (table) => {
      table.increments('id').primary();
      table.string('text', 30).notNullable();
      table.integer('status_id', 2).unsigned().notNullable().defaultTo(1);
      table.foreign('status_id')
        .references('id')
        .inTable('status')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps()
    })
  }

  down () {
    this.drop('products_types')
  }
}

module.exports = StatusSchema