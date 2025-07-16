const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Reservas Hoteleras',
    version: '1.0.0',
    description: 'Documentación de la API para gestionar reservas en hoteles.',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/reservas',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
