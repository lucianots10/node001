var app = require('./config/express')();
var MensagemDTO = require('./app/dto/MensagemDTO');

var port = 8080;

app.listen(port, function() {
    console.log("Servidor iniciado na porta " + port + "...");
});

app.use(function(req, res) {
    res.status(400);
    res.send(new MensagemDTO(1, 0, 0, "Serviço não mapeado no servidor."));
});
