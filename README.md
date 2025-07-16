# 4.Proyecto_NODE.JS_Reservashoteleras_Modulo_N4

# 🏨 Proyecto Node.js: Gestión de Reservas Hoteleras

Este proyecto consiste en la creacion de una aplicacion de servicios para la industria hotelera, específicamente para la gestión de reservas con un sistema de busqueda, utilizando **Node.js y Express**. Este desarrollo busca realizar operaciones **CRUD completas**, junto con **filtros específicos** como búsqueda por hotel, fechas, tipo de habitación, estado y cantidad de huéspedes. La API está documentada con **Swagger** y desplegada en **Render.com**.

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

La estructura del proyecto fue pensada para separar responsabilidades y facilitar el entendimiento de cualquier persona que desee entender el codigo: 

│
├── controllers/
│   └── reservas.controller.js     # Contiene la lógica de negocio para cada endpoint

│
├── data/
│   └── reservas.json              # Archivo que simula la base de datos y en donde se guarda la información

│
├── models/
│   └── reserva.model.js           # Archivo que define como deben estructurarse los datos

│
├── routes/
│   └── reservas.routes.js         # Mapa con todas las rutas de la API y las funciones que se ejecutaran

│
├── swagger/
│   └── swagger.js                 # Configuración Swagger para documentar endpoints

│
├── .gitignore                     # Excluye node_modules y .env del repositorio

├── server.js                      # Punto de entrada del servidor Express

├── README.md                      # Documentación del desarrollo del proyecto. 

├── package.json / package-lock.json


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

- [x] Aplicar las operaciones CRUD en un segmento de datos
- [x] Desarrollar una API REST
- [x] Trabajar con datos estructurados
- [x] Implementar la lógica de negocios
- [x] Documentar una API

---

## 📚 Documentación Swagger

La documentación de esta API está generada con `swagger-jsdoc` y `swagger-ui-express`.

Puedes acceder a la documentación en formato UI desde:
📌 [`/api-docs`](https://four-proyecto-node-js-reservashoteleras.onrender.com/api-docs)

---

## 🌐 Despliegue en Render

Se desplegó usando una instancia gratuita de **Render Web Service** con los siguientes pasos:

1. Se subio el proyecto a GitHub.
2. Se creo una Web Service en [Render.com](https://render.com).
3. Se conecto el repo → Eligiendo branch `main`.
4. Se establecio variable de entorno:  
   `PORT=10000`
5. Se desplego la opcion “Deploy Web Service”

## 🚀 URL de la API en Render

📎 [`https://four-proyecto-node-js-reservashoteleras.onrender.com`](https://four-proyecto-node-js-reservashoteleras.onrender.com)

📎 Documentación Swagger:  
[`https://four-proyecto-node-js-reservashoteleras.onrender.com/api-docs`](https://four-proyecto-node-js-reservashoteleras.onrender.com/api-docs)

---

## 👩🏻‍💻 Autor

**Katherine Venegas** – Bootcamp Desarrollo Web Full Stack 2025  
[GitHub: @KathyVenegas3](https://github.com/KathyVenegas3)

---

