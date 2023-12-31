**API de Usuarios con Mongoose y Express**

Esta API proporciona un conjunto de endpoints para gestionar usuarios. Utiliza Mongoose como ODM para interactuar con una base de datos MongoDB y Express para gestionar las rutas.

## Instalación

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la cadena de conexión de MongoDB y el puerto del servidor.

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
   ```

3. Inicia la aplicación:

   ```bash
   npm start
   ```

   La API estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

## Documentación de Endpoints

### 1. Crear un Usuario

**Endpoint:**

- `POST /api/users`

**Parámetros de la solicitud:**

- `nombre` (String): Nombre del usuario.
- `fechaNacimiento` (Date): Fecha de nacimiento del usuario.
- `edad` (Number): Edad del usuario.
- `estatus` (Boolean): Estatus del usuario.
- `idCargo` (Number): Identificador del cargo.

**Ejemplo de solicitud:**

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"nombre": "Ejemplo Usuario", "fechaNacimiento": "1990-01-01", "edad": 30, "estatus": true, "idCargo": 1}'
```

**Respuesta Exitosa:**

```json
{
  "ok": true,
  "message": "User created"
}
```

### 2. Obtener Usuarios

**Endpoint:**

- `GET /api/users`

**Parámetros de la solicitud:**

- Ninguno.

**Ejemplo de solicitud:**

```bash
curl http://localhost:3000/api/users
```

**Respuesta Exitosa:**

```json
{
  "ok": true,
  "data": [
    {
      "_id": 1,
      "nombre": "Ejemplo Usuario",
      "fechaNacimiento": "1990-01-01",
      "edad": 30,
      "estatus": true,
      "idCargo": 1
    },
    // Otros usuarios...
  ]
}
```

### 3. Actualizar Usuario

**Endpoint:**

- `PUT /api/users/:uid`

**Parámetros de la solicitud:**

- `uid` (String): Identificador del usuario.
- Cualquier parámetro opcional para actualizar.

**Ejemplo de solicitud:**

```bash
curl -X PUT http://localhost:3000/api/users/1 -H "Content-Type: application/json" -d '{"nombre": "Nuevo Nombre"}'
```

**Respuesta Exitosa:**

```json
{
  "ok": true,
  "message": "User updated"
}
```

### 4. Eliminar Usuario

**Endpoint:**

- `DELETE /api/users/:uid`

**Parámetros de la solicitud:**

- `uid` (String): Identificador del usuario.

**Ejemplo de solicitud:**

```bash
curl -X DELETE http://localhost:3000/api/users/1
```

**Respuesta Exitosa:**

```json
{
  "ok": true,
  "message": "User deleted"
}
```

