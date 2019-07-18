const templates = require('../views/templates')

class BaseController {

    static rotas() {
        return {
            home: '/'
        }
    }

    buscaHome() {
        return function (req, resp) {
            resp.marko(
                templates.base.home
            );
        }
    }
}

module.exports = BaseController