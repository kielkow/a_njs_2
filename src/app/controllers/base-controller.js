const templates = require('../views/templates')

class BaseController {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        }
    }

    buscaHome() {
        return function (req, resp) {
            resp.marko(
                templates.base.home
            );
        }
    }

    login(){
        return function(req, resp){
            resp.marko(
                templates.base.login
            )
        }
    }

    efetuaLogin(){
        return function(req, resp){
            
        }
    }
}

module.exports = BaseController