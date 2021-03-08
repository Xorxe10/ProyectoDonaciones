let mongoose = require('mongoose')
let Schema = mongoose.Schema

let DonationSchema = Schema (
    {
        _id: {type: Schema.ObjectId, auto: true},
        titulo: String,
        descripcion: String,
        fechaCaducidad: Date
    }
)

module.exports = mongoose.model('donation', DonationSchema)