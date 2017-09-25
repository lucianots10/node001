var UsuarioDTO = require('../dto/UsuarioDTO');

function UsuarioDAO() {
};

UsuarioDAO.prototype.buscaUsuario = function(idUsuario, callback) {

	var resultado = new Array();
	
	var usuTmp;
	
	usuTmp = new UsuarioDTO(1, "nome 1", "login 1", "senha 1");
	resultado[0] = usuTmp;

	callback(0, resultado);

};

UsuarioDAO.prototype.buscaTodosUsuarios = function(callback) {

	var resultado = new Array();
	
	var usuTmp;
	
	usuTmp = new UsuarioDTO(1, "nome 1", "login 1", "senha 1");
	resultado[0] = usuTmp;

	usuTmp = new UsuarioDTO(2, "nome 2", "login 2", "senha 2");
	resultado[1] = usuTmp;

	usuTmp = new UsuarioDTO(3, "nome 3", "login 3", "senha 3");
	resultado[2] = usuTmp;

	callback(0, resultado);

};

module.exports = UsuarioDAO;