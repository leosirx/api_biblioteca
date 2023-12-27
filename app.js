const express = require('express');
const app = express();
// Importamos el Router de Libros
const librosRouter = require('./routes/libros');
const { auth } = require("express-oauth2-jwt-bearer");
// Importamos el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

const autenticacion = auth({
    audience: "http://localhost:3000/api/productos",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
});

app.use("/libros", autenticacion, librosRouter);
app.use(express.json());
app.use('/libros', librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});