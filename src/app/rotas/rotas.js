const LivroController = require('../controllers/livro-controller')
const BaseController = require('../controllers/base-controller')

const livroController = new LivroController()
const baseController = new BaseController()

const { check } = require('express-validator/check');

module.exports = (app) => {

    const rotasBase = BaseController.rotas()
    const rotasLivro = LivroController.rotas()

    app.get(rotasBase.home, baseController.buscaHome());

    app.get(rotasLivro.lista, livroController.lista());

    app.get(rotasLivro.buscaForm, livroController.buscaForm());

    app.get(rotasLivro.buscarPorid, livroController.buscaPorId());

    app.post(rotasLivro.adiciona,
        [
            check('titulo').isLength({ min: 1 }).withMessage('Titulo precisa de mais caracteres'),
            check('preco').isCurrency().withMessage('Valor do preço inválido')
        ],
        livroController.adiciona()
    );

    app.put(rotasLivro.atualiza, livroController.atualiza());

    app.delete(rotasLivro.remove, livroController.delete());


};