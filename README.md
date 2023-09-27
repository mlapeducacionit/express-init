## Inicializar un proyecto con NODE

```sh
touch server.js # Creo un archivo con el nombre server.js
npm init -y # Esto basado en el archivo creado va a crear el package.json
```

## Nodemon (Live Server de Backend)

<https://www.npmjs.com/package/nodemon>

```sh
npm i nodemon -D # Se instala como dependencia de desarrollo
```

> En el pacakge.json

```json
"scripts": {
    "dev": "nodemon server.js",
}
```

## Arrancar el servidor de desarrollo

```sh
npm run dev
```

## Detener servidor de desarrollo

Ctrl + C

## Las Web API no existen en Node (Existen las Node API)

<https://nodejs.org/dist/latest-v18.x/docs/api/>

## Para poder trabajar con variables de entorno
Utilizamos la librería DOTENV

<https://www.npmjs.com/package/dotenv>

```sh
npm i dotenv -D # El flag -D nos indica que va a ser una depedencia de desarrollo
```

> Para utilizar dotenv necesito crear 2 archivos.

1. .env || => No se comparte. O sea se coloca en el .gitignore
2  .env.example || => Este se comparte pero se dejan las variables vacías.

> Incomporación de dotenv en el proyecto

```sh
import 'dotenv/config'
```
> Uso la variables definida en el .env

```js
process.env.VARIABLE_DEFINIDA
process.env.PORT // <= Ejemplo
```