const {Statuscode} = require('http-status-codes');
const {Airplaneservice} = require('../services');

//its should be a post request
// is should contain a request body with the airplane data
async function createAirplane(req, res) {
    try {
        const airplane  = await Airplaneservice.createAirplane({
            modelName: req.body.modelName,
            capacity: req.body.capacity,
        })
        return res.
        status(Statuscode.CREATED)
        .json({
            sucess: true,
            message: "Airplane created successfully",
            data: airplane,
            error: {}
        }); 
    } catch (error) {
        return res.
        status(Statuscode.INTERNAL_SERVER_ERROR)
        .json({
            sucess: false,
            message: "Error creating airplane",
            data: {},
            error: error.message
        });
    }       
}

module.exports = {
    createAirplane  
};
