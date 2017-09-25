function MensagemDTO(codTipoMensagemErro, codMensagemErro, codCampoErro, mensagem) {
	this.codTipoMensagemErro = parseInt(codTipoMensagemErro);
	this.codMensagemErro = parseInt(codMensagemErro);
	this.codCampoErro = parseInt(codCampoErro);
	this.mensagem = mensagem;
}

module.exports = MensagemDTO;