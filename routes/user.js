import express from "express";
import { createUser } from "../controller/user.js";

const router = express.Router();

// CREATE USER DETAILS

router.post("/" ,createUser);

export default router;