import express from "express";

import { getUser, createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/user", getUser);
router.post("/user", createUser);

export default router;
