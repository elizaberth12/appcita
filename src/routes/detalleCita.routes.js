import { Router } from "express";
import * as detalleCitaCtrl from "../controllers/detalleCita.controller.js";

const router = Router();

router.get("/", detalleCitaCtrl.getDetalleCitas);
router.post("/", detalleCitaCtrl.createDetalleCita);
router.put("/:id", detalleCitaCtrl.updateDetalleCita);
router.delete("/:id", detalleCitaCtrl.deleteDetalleCita);

export default router;
