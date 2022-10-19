const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const port = 3000;


app.use(express.json());
app.use('/', routes);

app.use((error, req, res, next) => {
    if(error.message == "Id incorreto ou inexistente."){
        console.log("Id incorreto ou inexistente.");
        res.sendStatus(404).end()
    } else if (error.message == "O Pokemon já está registrado."){
        console.log("O Pokemon já está registrado.");
        res.sendStatus(409).end();
    } else {
        res.sendStatus(500).end();
    }
})


app.listen(port, () => {
    console.log(`Aplicação rodando com sucesso: http://localhost:${port}`);
});

