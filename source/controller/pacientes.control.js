import { connection } from "../../source/database/db.js";

export const getPacientes = async (req, res) => {
  const [rows] = await connection.query("SELECT * FROM paciente");
  res.json(rows);
};