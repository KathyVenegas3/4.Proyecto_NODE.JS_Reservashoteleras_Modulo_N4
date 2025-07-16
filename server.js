
require('dotenv').config();
const express = require('express');
const app = express();
const reservasRouter = require('./routes/reservas.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

app.use(express.json());
app.use('/api/reservas', reservasRouter);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
