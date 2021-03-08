var express = require('express')
const DonationController = require('./donationController')
var api = express.Router()


api.get('/donations', DonationController.getDonations)  // devolver todas las donaciones
api.post('/donation', DonationController.saveDonation) // insertar donacion nueva (los donacio las obtengo del body)



module.exports = api