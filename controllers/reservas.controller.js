//Controller contiene logica que ejecuta la operaciones CRUD para reservas hoteleras

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const Reserva = require('../models/reserva.model');

const filePath = path.join(__dirname, '../data/reservas.json');

function leerReservas() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

function guardarReservas(reservas) {
  fs.writeFileSync(filePath, JSON.stringify(reservas, null, 2));
}

// 1. Crear reserva
function crearReserva(req, res) {
  const { hotel, tipoHabitacion, huespedes, fechaInicio, fechaFin, estado } = req.body;
  const reservas = leerReservas();
  const nuevaReserva = new Reserva(uuidv4(), hotel, tipoHabitacion, huespedes, fechaInicio, fechaFin, estado);
  reservas.push(nuevaReserva);
  guardarReservas(reservas);
  res.status(201).json(nuevaReserva);
}

// 2. Obtener todas las reservas
function obtenerReservas(req, res) {
  const reservas = leerReservas();
  res.json(reservas);
}

// 3. Obtener reserva por ID
function obtenerReservaPorId(req, res) {
  const reservas = leerReservas();
  const reserva = reservas.find(r => r.id === req.params.id);
  if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
  res.json(reserva);
}

// 4. Actualizar reserva por ID
function actualizarReserva(req, res) {
  const reservas = leerReservas();
  const index = reservas.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

  reservas[index] = { ...reservas[index], ...req.body };
  guardarReservas(reservas);
  res.json(reservas[index]);
}

// 5. Eliminar reserva por ID
function eliminarReserva(req, res) {
  let reservas = leerReservas();
  const existe = reservas.some(r => r.id === req.params.id);
  if (!existe) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

  reservas = reservas.filter(r => r.id !== req.params.id);
  guardarReservas(reservas);
  res.json({ mensaje: 'Reserva eliminada correctamente' });
}

// 6. Filtrar por hotel
function filtrarPorHotel(req, res) {
  const reservas = leerReservas();
  const resultado = reservas.filter(r => r.hotel.toLowerCase() === req.params.nombreHotel.toLowerCase());
  res.json(resultado);
}

// 7. Filtrar por rango de fechas
function filtrarPorFechas(req, res) {
  const { fechaInicio, fechaFin } = req.params;
  const reservas = leerReservas();
  const resultado = reservas.filter(r => r.fechaInicio >= fechaInicio && r.fechaFin <= fechaFin);
  res.json(resultado);
}

// 8. Filtrar por tipo de habitación
function filtrarPorTipo(req, res) {
  const reservas = leerReservas();
  const resultado = reservas.filter(r => r.tipoHabitacion.toLowerCase() === req.params.tipo.toLowerCase());
  res.json(resultado);
}

// 9. Filtrar por estado
function filtrarPorEstado(req, res) {
  const reservas = leerReservas();
  const resultado = reservas.filter(r => r.estado.toLowerCase() === req.params.estado.toLowerCase());
  res.json(resultado);
}

// 10. Filtrar por cantidad de huéspedes
function filtrarPorHuespedes(req, res) {
  const cantidad = parseInt(req.params.cantidad);
  const reservas = leerReservas();
  const resultado = reservas.filter(r => r.huespedes === cantidad);
  res.json(resultado);
}

module.exports = {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
  filtrarPorHotel,
  filtrarPorFechas,
  filtrarPorTipo,
  filtrarPorEstado,
  filtrarPorHuespedes,
};






