const express = require('express');
const router = express.Router();

//index
router.get('/posts', (req,res) => {
    res.send('lista dei post');
});

//show
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(`Dettaglio del post ${id}`);
});

//store
router.post('/', (req, res) => {
    res.json(`crea un nuovo post`)
})









module.exports = router;