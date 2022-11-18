const express = require('express')
const cors = require('cors')
const dbconnection = require('../database/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.EncuestaPatch = "/api/encuesta"
    
      
        this.middlewares()
        this.routes()
        this.dbconectar()
    }


    async dbconectar(){
        await dbconnection()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.EncuestaPatch,require("../routes/encuesta"))
    
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`escuchando desde el puerto ${this.port}`)
        })
    }

}
module.exports = Server
