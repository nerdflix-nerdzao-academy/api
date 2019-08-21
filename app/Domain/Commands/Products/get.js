'use strict'
//const CompanyRepository = use('App/Infra/Repositories/Company');

class GetProductCommand {

  async execute({ request }) {
    const queries = request.qs;

    //let data = new CompanyRepository().getWhereRawJsonExtract(queries); 
    return [
        {
            "lorem":"ipsum"
        }
    ]
  }
}
module.exports = GetProductCommand