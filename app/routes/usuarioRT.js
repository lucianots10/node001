var MensagemDTO = require('../dto/MensagemDTO');
var UsuarioDTO = require('../dto/UsuarioDTO');
var UsuariosDTO = require('../dto/UsuariosDTO');
var UsuarioDAO = require('../dao/UsuarioDAO');

module.exports = function(app){

	app.get('/usuario/:idUsu', function(req, res){

        var usuarioDAO = new UsuarioDAO();

        usuarioDAO.buscaUsuario(req.params.idUsu, function(erro, resultado) {

            if (resultado == null) {
                res.status(400);
                res.send(new MensagemDTO(1, 1, 1, "Houve erro interno no servidor. ERRO: " + erro ));
            }
            else if (resultado != null && resultado.length > 0) {

                var dtoRetorno = new UsuarioDTO(resultado[0].id, resultado[0].nome, resultado[0].login, resultado[0].senha);

                res.status(200);
                res.json(dtoRetorno);

            }
            else {
                res.status(400);
                res.send(new MensagemDTO(1, 1, 1, "Não houve resultados com o parâmetro informado."));
            }
        });

	});

	app.get('/usuarios', function(req, res){

        var usuarioDAO = new UsuarioDAO();

        usuarioDAO.buscaTodosUsuarios(function(erro, resultado) {

            if (resultado == null) {
                res.status(400);
                res.send(new MensagemDTO(1, 1, 1, "Houve erro interno no servidor. ERRO: " + erro ));
            }
            else if (resultado != null && resultado.length > 0) {

                var dtoRetorno = new UsuariosDTO(resultado);

                res.status(200);
                res.json(dtoRetorno);

            }
            else {
                res.status(400);
                res.send(new MensagemDTO(1, 1, 1, "Não houve resultados com o parâmetro informado."));
            }
        });

	});

}