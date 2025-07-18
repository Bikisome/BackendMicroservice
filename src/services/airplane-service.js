const {AirplaneRepository }= require('../repositories');

const airplaneRepository = new AirplaneRepository();




async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.error(`Error creating airplane: ${error.message}`);
        throw error;
    }
}

module.exports  = {
    createAirplane
}