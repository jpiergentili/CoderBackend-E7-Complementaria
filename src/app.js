import express from "express";
import handlebars from 'express-handlebars'
import pokeRouter from './routes/pokemon.router.js'
import mongoose from "mongoose";
/* import trainnerRouter from './routes/trainner.router.js' */

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configuracion del motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

//configuracion de la carpeta publica
app.use(express.static('./src/public'))

app.get('/', (req, res) => res.send('Server OK'))
app.use('/pokemon', pokeRouter)
/* app.use('/trainner', trainnerRouter) */

mongoose.set('strictQuery', false)

try {
    await mongoose.connect('mongodb+srv://javypier1:Q1w2e3r4@jp-backend-coder01.bavi18s.mongodb.net/pokedex')
  } catch (error) {
    console.log("No se pudo conectar con la base de datos!!");
  }
 
app.listen(8080, () => console.log('Server UP'))