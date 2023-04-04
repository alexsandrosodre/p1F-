const express = require('express');
const Loaders = require('./app/loaders').default;
const app = express();
const routes = require('./routes');

Loaders.start();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Estou Funcionando');
});
