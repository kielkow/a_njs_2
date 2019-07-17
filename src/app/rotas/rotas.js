const LivroController = require('../controllers/livro-controller')
const BaseController = require('../controllers/base-controller')
const LivroModel = require('../models/livro')

const livroController = new LivroController()
const baseController = new BaseController()

module.exports = (app) => {

    const rotasBase = BaseController.rotas()
    const rotasLivro = LivroController.rotas()

    app.get(rotasBase.home, baseController.buscaHome());

    app.get(rotasLivro.lista, livroController.lista());

    app.get(rotasLivro.buscaForm, livroController.buscaForm());

    app.get(rotasLivro.buscarPorid, livroController.buscaPorId());

    app.post(rotasLivro.adiciona, LivroModel.validacoes(), livroController.adiciona());

    app.put(rotasLivro.atualiza, livroController.atualiza());

    app.delete(rotasLivro.remove, livroController.delete());

};