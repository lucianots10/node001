function UsuarioDTO(id, nome, login, senha) {
    this.id = parseInt(id);
    this.nome = nome;
    this.login = login;
    this.senha = senha;
}

module.exports = UsuarioDTO;