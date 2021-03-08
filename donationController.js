let Donation = require('./donationSchema')

// Almacena una donacion nueva en la bd mongo
// La informacion de la donacion nos llega por el body
async function saveDonation(req, res){
    const donationBody = req.body
    const donation = new Donation(donationBody)
    try{
        const donationGuardado = await donation.save()
        res.status(200).json('Informacion guardada correctamente')
    }catch(error){
        res.status(500).json('error:'+error)
    }

}

// Devuelve los datos de la donacion almacenados en la BD mongo
async function getDonations(req, res) {
   
    try{
        const donations = await Donation.find({}).exec()
        res.status(200).json(donations)
    }catch(error){
        res.status(500).json('error:'+error)
    }
}



module.exports = {getDonations,saveDonation}