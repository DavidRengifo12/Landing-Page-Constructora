import express from "express";
import { sendWhatsapp } from "../controllers/contactoController.js";

const router = express.Router();

router.post("/contacto", sendWhatsapp);

export default router;