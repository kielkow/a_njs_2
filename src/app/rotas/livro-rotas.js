const LivroController = require('../controllers/livro-controller')
const LivroModel = require('../models/livro')

const livroController = new LivroController()

module.exports = (app) => {

    const rotasLivro = LivroController.rotas()

    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.adiciona)
        .get(livroController.buscaForm())
        .post(LivroModel.validacoes(), livroController.adiciona())
        .put(LivroModel.validacoes(), livroController.atualiza())

    app.get(rotasLivro.atualiza, livroController.buscaPorId());

    app.delete(rotasLivro.remove, livroController.delete());


};