const { Schema, model } = require('mongoose')

const EncuestaShema = Schema({
    nombreEncuesta:{
    type: String
},
fecha:{
    type:Number
},
documentoEncuestado:{
   type:Number

},
nombreEncuestado:{
    type:String
},
edad:{
    type:Number
},
genero:{
    type:String
},
empleado:{
    type:String
}

})

module.exports =model('encuesta',EncuestaShema)