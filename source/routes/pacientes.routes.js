import { Router } from "express";
import { getPacientes } from "../controller/pacientes.control.js";

const router = Router();

// Ruta GET para obtener pacientes
router.get("/", getPacientes);

export default router;