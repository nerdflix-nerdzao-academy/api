'use strict'
const ProductsRepository = use('App/Infra/Repositories/Products');

class GetProductCommand {

  async execute({ request }) {
    const queries = request.qs;

    let data = new ProductsRepository().get(); 
    return data;
  }
}
module.exports = GetProductCommand