const { check } = require('express-validator/check');

class Livro {
    static validacoes() {
        return [
            check('titulo').isLength({ min: 1 }).withMessage('Titulo precisa de mais caracteres'),
            check('preco').isCurrency().withMessage('Valor do preço inválido')
        ]
    }
}

module.exports = Livro