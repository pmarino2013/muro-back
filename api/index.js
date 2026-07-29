import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Mensaje } from "../models/mensaje.js";
import { dbConnect } from "../database/connect.js";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const port = 5500;
app.use(cors());
app.use(express.json());

app.get("/api/mensajes", async (req, res) => {
  const mensajes = await Mensaje.find().sort({ creadoEn: -1 });
  res.json({ mensajes });
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

  io.emit("nuevo-mensaje", mensaje);

  res.status(201).json({
    ok: true,
    msg: "Mensaje guardado!",
  });
});

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);
});

await dbConnect();

server.listen(port, () => {
  console.log(`Server online en puerto: ${port}`);
});
