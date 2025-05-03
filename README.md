
# Microservicio GraphQL para Gestión de Películas - Sakila 1.0.0

## Descripción General

Este proyecto implementa un **microservicio independiente utilizando GraphQL** que consume la API REST del sistema **Sakila 1.0.0** para la gestión de películas. El microservicio permite la consulta de películas desde una base de datos MySQL, autenticándose automáticamente con un token JWT y exponiendo un endpoint **GraphQL** que facilita el acceso a los datos.

---

## Tecnologías Utilizadas

- **Node.js**: Plataforma para ejecutar el microservicio.
- **Apollo Server (GraphQL)**: Servidor para gestionar las consultas GraphQL.
- **Axios**: Cliente HTTP para realizar las peticiones a la API externa.
- **dotenv**: Manejo de variables de entorno.
- **MySQL**: Base de datos relacional utilizada para almacenar las películas.

---

## Instalación

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local con el siguiente comando:

```bash
git clone https://github.com/pardovich/AlejandroPardo_2daEvaluacionBackend.git
```

### 2. Instalar Dependencias

Accede a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
cd AlejandroPardo_2daEvaluacionBackend
npm install
```

### 3. Configurar el Archivo `.env`

Crea un archivo **`.env`** en la raíz del proyecto con las siguientes variables de entorno:

```env
API_URL=http://localhost:3000
USERNAME=admin
PASSWORD=admin123
```

### 4. Iniciar el Servidor

Para iniciar el servidor GraphQL, utiliza el siguiente comando:

```bash
npm start
```

El servidor GraphQL estará disponible en [http://localhost:4000](http://localhost:4000).

---

## Uso

### 1. Acceder a GraphQL Playground

Una vez el servidor esté activo, podrás acceder al **GraphQL Playground** en:  
[http://localhost:4000/](http://localhost:4000/)

### 2. Consulta de Películas

Realiza una consulta para obtener las películas disponibles:

```graphql
query {
  films {
    film_id
    title
    description
    release_year
  }
}
```

#### Respuesta Esperada:

```json
{
  "data": {
    "films": [
      {
        "film_id": 1,
        "title": "ACADEMY DINOSAUR",
        "description": "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
        "release_year": 2006
      },
      {
        "film_id": 2,
        "title": "ACE GOLDFINGER",
        "description": "A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China",
        "release_year": 2006
      },
      ...
    ]
  }
}
```

---

## Estructura del Proyecto

```
/AlejandroPardo_2daEvaluacionBackend
├── src/
│   ├── apiClient.js
│   ├── resolvers.js
│   ├── schema.graphql
│   └── server.js
├── .env
├── package-lock.json
├── package.json
└── README.md
```

### Descripción de Archivos

- **`schema.graphql`**: Define los tipos de datos y las consultas disponibles.
- **`resolvers.js`**: Lógica para procesar las consultas y obtener los datos de las películas.
- **`apiClient.js`**: Se encarga de la autenticación y el consumo de la API REST.
- **`server.js`**: Configura e inicia el servidor Apollo Server.

---

## Pruebas

### 1. Pruebas Manuales

- Realiza consultas desde el GraphQL Playground y valida las respuestas correctas.

### 2. Pruebas Unitarias

Puedes agregar pruebas unitarias utilizando **Jest** o **Mocha** para verificar que las consultas y la lógica de los resolutores funcionen correctamente.

---

## Autor

**Alejandro Miguel Pardo Romano**  
**Docente**: Miguel Ángel Pacheco  
**Materia**: Tecnologías Web II  
**Gestión**: 1-2024  

---

## Notas

- **API Sakila**: Asegúrate de que la API Sakila esté corriendo antes de probar el microservicio.
- **Obtener el Token**: El token JWT se obtiene mediante el siguiente endpoint:

```http
POST http://localhost:3000/api/auth/login
```

Utiliza **Postman** para enviar el siguiente JSON y obtener el token:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Recuerda que el token se debe incluir en el header **Authorization** de todas las consultas posteriores.

---
