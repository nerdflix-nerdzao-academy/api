'use strict'

const DefaultRepository = use('./DefaultRepository');
const Products = use('App/Models/Products');

class ProducsRepository extends DefaultRepository {
    async create(params) {
        return await Products.create(params);
    }

    async get() {
        return await Products.query().paginate(1, 10);
    }
}

module.exports = ProducsRepository