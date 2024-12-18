import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.error('Erreur de connexion à MongoDB :', err));

// Route de test
app.get('/', (req: Request, res: Response) => {
  res.send('API TypeScript Fonctionne !');
});

app.listen(PORT, () => console.log(`Serveur TypeScript démarré sur le port ${PORT}`));