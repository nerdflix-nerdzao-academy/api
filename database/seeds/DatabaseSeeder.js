'use strict'

const Database = use('Database')
const Products = use('App/Models/Products')
const ProductsTypes = use('App/Models/ProductsTypes')
const Status = use('App/Models/Status')
const { status } = use('./../../config/enums');

class DatabaseSeeder {
  async run() {
    await Database.raw('PRAGMA foreign_keys = OFF;');
    await Status.truncate();
    await Products.truncate();
    await ProductsTypes.truncate();

    const statusData = Object.keys(status).map(index => status[index]);
    await Status.createMany(statusData);

    await ProductsTypes.createMany([
      {
        id: 1,
        text: 'Alimentação',
        status_id: 1,
      },
      {
        id: 2,
        text: 'Bebida',
        status_id: 1,
      }
    ]);

    await Products.createMany([
      {
        id: '1fffe522-e46f-4366-9cb9-bb4807b58b59',
        status_id: 1,
        name: "Arroz",
        description: "Lorem ipsum",
        product_type_id: 1,
        data: {
          payment: [1, 2, 3],
        }

      },
      {
        id: 'dae2d1a4-b00b-4281-980e-875f31e188e1',
        status_id: 1,
        name: "Feijão",
        description: "Lorem ipsum",
        product_type_id: 1,

      },
      {
        id: '62e00834-a0ac-42fd-88f7-9a781b95ec0c',
        status_id: 1,
        name: "Coca cola",
        description: "Lorem ipsum",
        product_type_id: 2,
        data: {
          payment: [1, 2, 3],
        }
      },
      {
        id: 'aed62762-8e08-49ab-b60f-9c10d9ec9cc9',
        status_id: 1,
        name: "Fanta",
        description: "Lorem ipsum",
        product_type_id: 2,
        data: {
          payment: [1, 2, 3],
        }
      },
    ]);

    await Database.raw('PRAGMA foreign_keys = ON;')
  }
}

module.exports = DatabaseSeeder