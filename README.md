# 4.Proyecto_NODE.JS_Reservashoteleras_Modulo_N4

# 🏨 Proyecto Node.js: Gestión de Reservas Hoteleras

Este proyecto consiste en una API RESTful para la gestión de **reservas hoteleras**, implementada con **Node.js y Express**. Permite realizar operaciones **CRUD completas**, junto con **filtros específicos** como búsqueda por hotel, fechas, tipo de habitación, estado y cantidad de huéspedes. La API está documentada con **Swagger / OpenAPI** y desplegada en **Render.com**.

---

## 🧩 Tecnologías utilizadas

- **Node.js** v22.x
- **Express** v4.x
- **Swagger UI Express** para documentación
- **dotenv** para variables de entorno
- **Estructura modular** siguiendo el patrón MVC
- **Archivos JSON** como base de datos local

---

## 📁 Arquitectura del Proyecto

La estructura del proyecto fue pensada para separar responsabilidades y facilitar la escalabilidad:

![Estructura del proyecto](https://github.com/KathyVenegas3/4.Proyecto_NODE.JS_Reservashoteleras_Modulo_N4/issues/1)

---

## 💡 Lógica utilizada para el manejo de datos

- Los datos se almacenan y persisten en el archivo `data/reservas.json`.
- Se creó una función `generarIdNumerico()` para asignar IDs secuenciales en lugar de UUID.
- Cada operación (crear, actualizar, eliminar) lee el archivo completo, lo modifica, y lo vuelve a guardar.
- Los filtros trabajan sobre los datos en memoria y realizan búsquedas exactas o por rangos.

---

## 🔧 10 Endpoints solicitados e implementados en el proyecto: 

### CRUD de reservas
| Método | Ruta                             | Descripción                       |
|--------|----------------------------------|-----------------------------------|
| POST   | `/api/reservas`                 | Crear una nueva reserva          |
| GET    | `/api/reservas`                 | Listar todas las reservas        |
| GET    | `/api/reservas/:id`             | Obtener una reserva por ID       |
| PUT    | `/api/reservas/:id`             | Actualizar una reserva por ID    |
| DELETE | `/api/reservas/:id`             | Eliminar una reserva por ID      |

### Filtros
| Método | Ruta                                              | Descripción                              |
|--------|---------------------------------------------------|------------------------------------------|
| GET    | `/api/reservas/hotel/:nombreHotel`                | Filtrar reservas por nombre de hotel     |
| GET    | `/api/reservas/fecha/:fechaInicio/:fechaFin`      | Filtrar por rango de fechas              |
| GET    | `/api/reservas/tipo/:tipo`                        | Filtrar por tipo de habitación           |
| GET    | `/api/reservas/estado/:estado`                    | Filtrar por estado (activa, cancelada...)|
| GET    | `/api/reservas/huespedes/:cantidad`               | Filtrar por número de huéspedes          |

---

## ✅ Estado del Proyecto

🔹 Proyecto 100% funcional y probado con **Thunder Client**.  
🔹 Cumple todos los requisitos técnicos y objetivos de aprendizaje:

- [x] Aplicación CRUD completa
- [x] Estructura modular y profesional
- [x] Documentación Swagger
- [x] Despliegue exitoso en Render

---

## 📚 Documentación Swagger

La documentación de esta API está generada con `swagger-jsdoc` y `swagger-ui-express`.

Puedes acceder a la documentación en formato UI desde:
📌 [`/api-docs`](https://four-proyecto-node-js-reservashoteleras.onrender.com/api-docs)

---

## 🌐 Despliegue en Render

Se desplegó usando una instancia gratuita de **Render Web Service** con los siguientes pasos:

1. Subir el proyecto a GitHub.
2. Crear Web Service en [Render.com](https://render.com).
3. Conectar el repo → Elegir branch `main`.
4. Establecer variable de entorno:  
   `PORT=10000` (o el puerto que uses).
5. Presionar “Deploy Web Service”.

## 🚀 URL de la API en Render

📎 [`https://four-proyecto-node-js-reservashoteleras.onrender.com`](https://four-proyecto-node-js-reservashoteleras.onrender.com)

📎 Documentación Swagger:  
[`https://four-proyecto-node-js-reservashoteleras.onrender.com/api-docs`](https://four-proyecto-node-js-reservashoteleras.onrender.com/api-docs)

---

## 👩🏻‍💻 Autor

**Katherine Venegas** – Bootcamp Desarrollo Web Full Stack 2025  
[GitHub: @KathyVenegas3](https://github.com/KathyVenegas3)

---

