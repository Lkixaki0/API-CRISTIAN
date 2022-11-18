const mongoose = require('mongoose')

const dbconnection = async =>{
    try{
   mongoose.connect(process.env.MONGODB_CNN)
   console.log('Conectado')
    }
    catch{
        console.log('error conexion DB')
    }
}
module.exports = dbconnection