//npm install express
//npm install -g -D nodemon
//npm install morgan(ver peticiones)
//npm install mongoose
// npm install dotenv
// npm install cors
// npm install helmet

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const apiRoutes = require('./donationRoutes')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express()

app.use(express.json())
app.use( morgan('tiny') )  //dev
app.use( helmet() )
dotenv.config()

app.use('/api/',apiRoutes)



app.get('/', (req, res)=>{
    res.status(200).send('Bienvenid@ a nuestro API RestFull (backend)')
})


const run = async () => {
    await mongoose.connect(process.env.URL_BASEDATOS, 
        { useNewUrlParser: true, useUnifiedTopology: true })
    await app.listen(process.env.PORT)
    console.log('Servidor y base de datos encendidos correctamente')
}

run().catch(error => console.log('Fallo al arrancar:'+error))