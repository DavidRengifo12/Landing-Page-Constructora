import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import contactoRoute from '../server/routes/contactoRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
});

app.use(limiter);

app.use("/api", contactoRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto: ${PORT}`);
});