'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.uuid('id').primary();
      table.string('name', 100).notNullable();
      table.string('description', 20).notNullable();
      table.integer('status_id', 2).unsigned().notNullable().defaultTo(1);
      table.foreign('status_id')
        .references('id')
        .inTable('status')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('product_type_id', 2).unsigned().notNullable().defaultTo(1);
      table.foreign('product_type_id')
        .references('id')
        .inTable('products_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.json('data').nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
