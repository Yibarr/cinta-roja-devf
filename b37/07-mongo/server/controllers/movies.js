const express = require('express');
const router = express.Router();

router.get('/saludo',(request, response) => {
    response.send('Hola');
})

module.exports = router;
