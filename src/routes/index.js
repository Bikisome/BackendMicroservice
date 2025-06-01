const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();
// Define the base route for API version 1

router.use('/v1', v1Routes);

module.exports = router;