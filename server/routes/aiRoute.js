import express from "express";
import {analyseCode} from "../controllers/aiController.js"

const router = express.Router();

router.post("/analyseCode", analyseCode);

export default router