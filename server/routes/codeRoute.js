import express from "express";
import {
  executeCode,
  getAllCode,
  getCodeByName,
  saveCode,
} from "../controllers/codeController.js";

const router = express.Router();

router.post("/run", executeCode);

router.get("/getAllCode", getAllCode);

router.get("/getCode/:codeName", getCodeByName);

router.post("/saveCode", saveCode)

export default router;
