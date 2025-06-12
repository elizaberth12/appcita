import { Router } from "express";
import * as gastoCtrl from "../controllers/gasto.controller.js";

const router = Router();

router.get("/", gastoCtrl.getGastos);
router.post("/", gastoCtrl.createGasto);
router.put("/:id", gastoCtrl.updateGasto);
router.delete("/:id", gastoCtrl.deleteGasto);

export default router;
