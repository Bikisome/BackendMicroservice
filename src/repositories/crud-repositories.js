import {Logger } from require('../config');

class CrudRepositorie { 
    constructor(model) {
        this.model = model;
    }
    
    async create(data) {
        try {
        const response =  await this.model.create(data);
        return response;
        } catch (error) {
        Logger.error(`Error creating record: ${error.message}`);
        throw error;
        }
    }

    async destroy(data){
        try{
             const response = await this.model.destroy({
                where :{
                    id : data
                }
             });
             return response;
        }
        catch (error) {
          Logger.error(`Error destroying record: ${error.message}`);
        throw error;
        }
    }

     async get(data){
        try{
            const response = await this.model.get.findByPk(data);
            return response;
        }
        catch (error) {
          Logger.error(`Error destroying record: ${error.message}`);
        throw error;
        }
    }

     async getAll(data){
        try{
            const response = await this.model.get.findAll();
            return response;
        }
        catch (error) {
          Logger.error(`Error destroying record: ${error.message}`);
        throw error;
        }
    }

    async update(data, id) {
        try {
            const response = await this.model.update(data, {
                where: { 
                    id : id
                }
            });
            return response;
        } catch (error) {
            Logger.error(`Error updating record: ${error.message}`);
            throw error;
        }
    }
    
 
}

module.exports = CrudRepositorie;