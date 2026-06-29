const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api/productos", productRoutes);
app.use("/api/pedidos", pedidoRoutes);

// Ruta de prueba
app.post("/api/login", (req, res) => {
    res.json({
        mensaje: "LOGIN TEST"
    });
});

// Solo inicia el servidor si se ejecuta directamente
if (require.main === module) {
   app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
}

// Exporta la aplicación para Jest y Supertest
module.exports = app;