import {Router} from 'express';
const router = Router();

router.get('/', (req, res) => {
    /* res.send(`Listando pokemons`) */
    res.render('list', {})
})

router.get('/:name', (req, res) => {
    const name = req.params.name
    res.send(`Listando pokemon ${name}`)
})

router.post('/', (req, res) => {
    res.send('Creando pokemon...')
})

router.delete('/:name',(req, res) => {
    const name = req.params.name
    res.send(`Borrando pokemon ${name}`)
})

export default router