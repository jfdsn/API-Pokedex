const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const port = 3000;


app.use(express.json());
app.use('/', routes);


app.listen(port, () => {
    console.log(`Aplicação rodando com sucesso: http://localhost:${port}`);
});

