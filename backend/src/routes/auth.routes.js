import express from "express";
import { signUp, signIn, logOut } from "../controllers/auth.controller.js"; 

const router = express.Router();

router.get("/signUp", signUp);
router.get("/signIn", signIn);
router.get("/logOut", logOut); 

export default router;
