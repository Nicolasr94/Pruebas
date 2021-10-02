
const controllerMain = {
    index: (req,res) => {
        res.render('index')
    },

    search: (req,res) => {
        let busqueda = req.query.search
        res.send(req.query.search)
        console.log(busqueda)
    }


}

module.exports = controllerMain;