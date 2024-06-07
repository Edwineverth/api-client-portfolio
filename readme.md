# API CLIENT PORTFOLIO
### Structure project
```
/project-root
│
├── dao
│   └── portfolio_dao.go
│
├── db
│   └── mongo.go
│
├── repository
│   └── portfolio_repository.go
│
├── handler
│   └── portfolio_handler.go
│
├── .env
├── main.go
└── go.mod

```

## Descripción

La API de `client-portfolio` permite gestionar portfolio en una base de datos MongoDB. Proporciona operaciones CRUD para crear, leer, actualizar y eliminar clientes.

## Requisitos

- Docker
- Docker Compose

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Edwineverth/api-client-portfolio.git

2. Asegurarse que las variables de entorno esten en un archivo .env

```bash
MONGO_URI=mongodb://mongo-portfolio:27017
MONGO_DB=portfolioDB
SERVER_PORT=8081
```
## Uso

Construir y ejecutar la aplicación con Docker Compose
Construye y ejecuta los contenedores:

```bash
Copiar código
docker-compose up --build
La aplicación estará disponible en http://localhost:8081.
```

## Nota:
Al correr la aplicación correrá un pequeño script para llenar con información inicial la DB.
En baso de querer insertar más información modificar el archivo.
```makefile
init-portfolio.js
```

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.