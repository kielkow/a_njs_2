class BaseController {

    static rotas() {
        return {
            home: '/'
        }
    }

    buscaHome() {
        return function (req, resp) {
            resp.marko(
                require('../views/base/home/home.marko')
            );
        }
    }
}

module.exports = BaseController