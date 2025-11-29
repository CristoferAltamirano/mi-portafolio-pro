import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  demoLink?: string;
  images: string[];
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
  title: { 
    type: String, 
    required: [true, 'El título es obligatorio'],
    trim: true,
    maxlength: [100, 'El título no puede tener más de 100 caracteres']
  },
  description: { 
    type: String, 
    required: true 
  },
  technologies: { 
    type: [String], 
    required: true 
  },
  link: { 
    type: String, 
    required: true 
  },
  demoLink: { 
    type: String 
  },
  images: { 
    type: [String], // Array de URLs de las imágenes
    default: [] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Evita re-compilar el modelo si ya existe (Hot Reload de Next.js)
const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;