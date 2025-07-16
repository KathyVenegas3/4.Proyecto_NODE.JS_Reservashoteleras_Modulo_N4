class Reserva {
  constructor(id, hotel, tipoHabitacion, huespedes, fechaInicio, fechaFin, estado) {
    this.id = id;
    this.hotel = hotel;
    this.tipoHabitacion = tipoHabitacion;
    this.huespedes = huespedes;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.estado = estado;
  }
}

module.exports = Reserva;
