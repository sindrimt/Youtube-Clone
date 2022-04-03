import express from "express";

import { getUser, createUser } from "../controllers/users.js";

// Denne filen inneholder alle metodene / verbene til users
const router = express.Router();

// Kjører verbene. Logikken ligger i controllers filen (users)

router.get("/", getUser);
router.post("/", createUser);

export default router;
