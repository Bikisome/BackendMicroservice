const CrudRepositorie = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepositorie {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;