const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('lista dei post');
});

router.get('/:id', (req,res)=> {
    const text=  'homepage';
    res.json(text);
})









module.exports = router;