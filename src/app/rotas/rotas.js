const LivroController = require('../controllers/livro-controller')
const BaseController = require('../controllers/base-controller')

const livroController = new LivroController()
const baseController = new BaseController()

const { check } = require('express-validator/check');

module.exports = (app) => {

    app.get('/', baseController.buscaHome());

    app.get('/livros', livroController.lista());

    app.get('/livros/form', livroController.buscaForm());

    app.get('/livros/form/:id', livroController.buscaPorId());

    app.post('/livros',
        [
            check('titulo').isLength({ min: 1 }).withMessage('Titulo precisa de mais caracteres'),
            check('preco').isCurrency().withMessage('Valor do preço inválido')
        ],
        livroController.adiciona()
    );

    app.put('/livros', livroController.atualiza());

    app.delete('/livros/:id', livroController.delete());


};