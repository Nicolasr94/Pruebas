const express = require('express');
const app = express();
const PORT = 3030;
const routerMain = require('./router/routerMain');

app.set('view engine', 'ejs');

    // Definiendo RUTAS
app.use('/',routerMain)
app.use('/products',routerMain)


    // Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)});
