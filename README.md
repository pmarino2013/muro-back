# Backend - Muro de deseos

Este proyecto es el backend de una aplicación tipo muro de deseos, donde los usuarios pueden enviar mensajes y consultarlos desde una base de datos MongoDB. La API está desarrollada con Node.js, Express y Mongoose.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- CORS

## Requisitos previos

- Node.js 18 o superior
- npm
- Una base de datos MongoDB (MongoDB Atlas o una instancia local)

## Instalación

1. Entrá en la carpeta del proyecto:

   ```bash
   cd "Muro deseos/back"
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Configurá la variable de entorno para la conexión a MongoDB en el archivo `.env`:

   ```env
   CNN_DB=mongodb://tu-usuario:tu-password@host:puerto/tu-base-de-datos
   ```

   En este proyecto ya existe un archivo `.env` con una URL de ejemplo, pero podés reemplazarlo por la tuya si lo necesitás.

## Ejecutar el proyecto

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor quedará disponible en:

```text
http://localhost:5500
```

## Endpoints disponibles

### Obtener mensajes

- Método: `GET`
- Ruta: `/api/mensajes`

Respuesta ejemplo:

```json
{
  "mensajes": []
}
```

### Crear un mensaje

- Método: `POST`
- Ruta: `/api/mensajes`
- Body esperado:

```json
{
  "nombre": "Juan",
  "contenido": "¡Gracias por este hermoso muro de deseos!"
}
```

Notas:

- El campo `nombre` es opcional.
- Si no se envía, se guardará como `Anónimo`.
- El campo `contenido` es obligatorio.

## Estructura del proyecto

```text
.
├── database/
│   └── connect.js
├── models/
│   └── mensaje.js
├── routes/
│   └── mensajes.js
├── index.js
├── package.json
└── .env
```

## Notas adicionales

- El puerto del servidor está configurado en `index.js` como `5500`.
- Si necesitás cambiarlo, editá la variable `port` en ese archivo.
- El proyecto está preparado para funcionar con una conexión a MongoDB directamente desde `process.env.CNN_DB`.
