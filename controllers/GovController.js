const apiGov = require('../services/apiGov');

class GovController{
    async getTestes(req, res){
        const response = await apiGov.get('datastore_search?resource_id=7f3a2046-1372-4e6f-b269-802bf17ef832')
        return res.json(response.data)
    }

    async getBairros(req, res){
        const response = await apiGov.get('datastore_search_sql?sql=SELECT%20distinct%20bairro%20from%20"e21b7420-de0f-4130-ac90-c6d5a08f84a2"order%20by%20bairro')
        return res.json(response.data)
    }

    async getPreservativos(req, res){
        try{
        const response = await apiGov.get(`datastore_search_sql?sql=SELECT * from "d05f6ffa-304b-4a28-bd03-1ffb26cbf866" where tipo_unidade  like '15.1|Aqui Tem Camisinha'`,
        {'Content-type': 'application/json;charset=latin1'})
        return res.json(response.data)
        }catch(err){
        return res.json(err.response.data)
        }
    }

    async getPrevencao(req, res){
        const response = await apiGov.get('datastore_search?resource_id=9aa8298b-8ffb-4801-a7d5-461d44f3ee24')
        return res.json(response.data)
    }

    async getTratamento(req, res){
        const response = await apiGov.get('datastore_search?resource_id=7f3a2046-1372-4e6f-b269-802bf17ef832')
        return res.json(response.data)
    }

}

module.exports = new GovController();