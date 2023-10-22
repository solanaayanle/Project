import express, { json, Router } from 'express';
import pkg from 'jsonwebtoken';
import authRoutes from './routes/authRoutes.js';
//routes/authRoutes.js';
import cors from 'cors'; 

const app = express();
const port = 8080; // Choose a port for your server

app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes); // Use the authRoutes for routes starting with /auth

// ... Define other routes and configurations ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
