import express from "express";
import mongoose from "mongoose";
import { Mensaje } from "./models/mensaje.js";
import { dbConnect } from "./database/connect.js";
import cors from "cors";

const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());

app.get("/api/mensajes", async (req, res) => {
  const mensajes = await Mensaje.find();
  res.json({
    mensajes,
  });
});

app.post("/api/mensajes", async (req, res) => {
  const body = req.body;

  const mensaje = new Mensaje({
    contenido: body.contenido,
  });

  if (body.nombre) {
    mensaje.nombre = body.nombre;
  }

  await mensaje.save();

  res.status(201).json({
    ok: true,
    msg: "Mensaje guardado!",
  });
});
await dbConnect();

app.listen(port, () => {
  console.log(`Server online en puerto: ${port}`);
});
