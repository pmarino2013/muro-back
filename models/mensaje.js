import { Schema, model } from 'mongoose';

const MensajeSchema = new Schema({
  nombre: { 
    type: String, 
    default: 'Anónimo' 
  },
  contenido: { 
    type: String, 
    required: true 
  },
  creadoEn: { 
    type: Date, 
    default: Date.now 
  }
});

export const Mensaje = model('Mensaje', MensajeSchema);