const express = require('express')
const cors = require('cors');

const app = express()

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//rota
app.use(require('./router/index'));


//porta
app.listen(3333)
console.log('Servidor Rodando');