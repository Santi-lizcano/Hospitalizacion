import express from "express";
import pacientesRoutes from "./routes/pacientes.routes.js";

const app = express();

app.set("port", 8000);

// middlewares
app.use(express.json());

// rutas
app.use("/api/pacientes", pacientesRoutes);

export default app;