# Proyecto de Mejora del Flujo de Login y Autenticación con JWT

Este proyecto tiene como objetivo mejorar el flujo de inicio de sesión, el servicio y la accesibilidad de los clientes de nuestra aplicación mediante la implementación de la autenticación de usuarios y la manipulación de JSON Web Tokens (JWT).

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción

La autenticación de usuarios y la gestión de sesiones son componentes críticos en cualquier aplicación que requiera un acceso seguro y personalizado. La implementación de JSON Web Tokens (JWT) es una solución popular para abordar estos aspectos.

Este proyecto se enfoca en trabajar con la autenticación y la seguridad de los usuarios de nuestra aplicación, lo que permite:

- Un inicio de sesión más seguro.
- Acceso a recursos protegidos.
- Un flujo de trabajo de autenticación mejorado.
- Mayor accesibilidad y comodidad para los clientes.

## Características

- **Autenticación de Usuarios:** Implementación de un sistema de autenticación de usuarios para garantizar que solo los usuarios autorizados tengan acceso a la aplicación.

- **Gestión de Sesiones con JWT:** Uso de JSON Web Tokens para la gestión de sesiones de usuario, lo que proporciona autenticación segura y accesible.

- **Registro de usuarios:** Uso de formularios para un registro de nuevos usuarios a la plataforma.

- **Registro de sesiones:** Cada intento de inicio de sesión, ya sea exitoso o no se registra, manteniendo un historial de esta activdiad.


## Requisitos

- Angular CLI, Node.js y npm instalados en tu sistema.
- Una base de datos para almacenar información de usuarios (En este caso MongoDb).

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/luisrs-dev/authentication-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tu-proyecto
   ```

3. Instala las dependencias en el frontend:

   ```bash
   cd frontend 
   npm install
   ```

4. Instala las dependencias en el backend:

   ```bash
   cd frontend 
   npm install
   ```

5. Crea un archivo con las variables de entorno del sistema:

- PORT
- DB_URI
- JWT_SECRET

6. Configura la conexión a tu base de datos y otros parámetros en el archivo de configuración.

7. Ejecuta la aplicación frontend:

   ```bash
   cd frontend
   npm start
   ```
8. Ejecuta la aplicación backend:

   ```bash
   cd backend
   npm run dev
   ```

## Uso

1. Registra nuevos usuarios en la aplicación.
2. Inicia sesión con tus credenciales.
3. Accede a las funcionalidades protegidas de la aplicación.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu función: `git checkout -b mi-funcion`.
3. Realiza los cambios necesarios y confirma tus modificaciones: `git commit -m 'Agrega una nueva función'`.
4. Empuja tus cambios a tu repositorio: `git push origin mi-funcion`.
5. Envía una solicitud de extracción (Pull Request) a este repositorio.