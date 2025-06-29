const express = require('express');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

require('./config/db');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use('/putPets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

const petRoutes = require('./routes/pet.routes');
app.use('/pets', petRoutes);

module.exports = app;
