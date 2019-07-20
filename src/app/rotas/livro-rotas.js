const LivroController = require('../controllers/livro-controller')
const LivroModel = require('../models/livro')
const BaseController = require('../controllers/base-controller')

const livroController = new LivroController()

module.exports = (app) => {

    const rotasLivro = LivroController.rotas()

    app.use(rotasLivro.autenticadas, function(req, resp, next){
        if(req.isAuthenticated()){
            next()
        }
        else{
            resp.redirect(BaseController.rotas().login)
        }
    })

    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.adiciona)
        .get(livroController.buscaForm())
        .post(LivroModel.validacoes(), livroController.adiciona())
        .put(LivroModel.validacoes(), livroController.atualiza())

    app.get(rotasLivro.atualiza, livroController.buscaPorId());

    app.delete(rotasLivro.remove, livroController.delete());


};