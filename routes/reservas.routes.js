// Mapa de Rutas de la API de Reservas Hoteleras

// Mapa de Rutas de la API de Reservas Hoteleras

const express = require('express');
const router = express.Router();
const controlador = require('../controllers/reservas.controller');

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               tipoHabitacion:
 *                 type: string
 *               huespedes:
 *                 type: integer
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *               fechaFin:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 */
router.post('/', controlador.crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/', controlador.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', controlador.obtenerReservaPorId);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               tipoHabitacion:
 *                 type: string
 *               huespedes:
 *                 type: integer
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *               fechaFin:
 *                 type: string
 *                 format: date
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva actualizada
 *       404:
 *         description: Reserva no encontrada
 */
router.put('/:id', controlador.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva eliminada
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', controlador.eliminarReserva);

/**
 * @swagger
 * /api/reservas/hotel/{nombreHotel}:
 *   get:
 *     summary: Filtrar reservas por nombre de hotel
 *     parameters:
 *       - in: path
 *         name: nombreHotel
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por hotel
 */
router.get('/hotel/:nombreHotel', controlador.filtrarPorHotel);

/**
 * @swagger
 * /api/reservas/fecha/{fechaInicio}/{fechaFin}:
 *   get:
 *     summary: Filtrar reservas por rango de fechas
 *     parameters:
 *       - in: path
 *         name: fechaInicio
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - in: path
 *         name: fechaFin
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Lista de reservas en el rango de fechas
 */
router.get('/fecha/:fechaInicio/:fechaFin', controlador.filtrarPorFechas);

/**
 * @swagger
 * /api/reservas/tipo/{tipo}:
 *   get:
 *     summary: Filtrar reservas por tipo de habitación
 *     parameters:
 *       - in: path
 *         name: tipo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas por tipo de habitación
 */
router.get('/tipo/:tipo', controlador.filtrarPorTipo);

/**
 * @swagger
 * /api/reservas/estado/{estado}:
 *   get:
 *     summary: Filtrar reservas por estado
 *     parameters:
 *       - in: path
 *         name: estado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas por estado
 */
router.get('/estado/:estado', controlador.filtrarPorEstado);

/**
 * @swagger
 * /api/reservas/huespedes/{cantidad}:
 *   get:
 *     summary: Filtrar reservas por cantidad de huéspedes
 *     parameters:
 *       - in: path
 *         name: cantidad
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de reservas por número de huéspedes
 */
router.get('/huespedes/:cantidad', controlador.filtrarPorHuespedes);

module.exports = router;
