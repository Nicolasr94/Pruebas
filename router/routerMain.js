const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/controllerMain')

// Redirijiendo a controladores
router.get('/',controllerMain.index);
router.get('/GET/busqueda',controllerMain.search);
//router.get('/products',controllerMain.products);


module.exports = router;

