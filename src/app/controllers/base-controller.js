class BaseController {

    buscaHome() {
        return function (req, resp) {
            resp.marko(
                require('../views/base/home/home.marko')
            );
        }
    }
}

module.exports = BaseController