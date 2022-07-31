const express = require('express');
const musicBL = require('../BL/music.BL');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log("i am in get");
    let data = await musicBL.getAllMusicalInstrument();
    return res.json(data);
})

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let data = await musicBL.getMusicalInstrumentByID(id);
    return res.json(data);
})

router.post('/', async (req, res) => {
    let body = req.body;
    let data = await musicBL.createNewMusicalInstrument(body);
    return res.json(data);
})

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    const body = req.body;
    let data = await musicBL.updateMusicalInstrument(id, body);
    return res.json(data);
})

router.delete('/:id', async (req, res) =>{
    console.log("in delete");
    let id = req.params.id;
    let data = await musicBL.deleteMusicalInstrument(id);
    return res.json(data);
})

module.exports = router;