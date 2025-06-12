import { Router } from "express";
import * as facturaCtrl from "../controllers/factura.controller.js";

const router = Router();

router.get("/", facturaCtrl.getFacturas);
router.post("/", facturaCtrl.createFactura);
router.put("/:id", facturaCtrl.updateFactura);
router.delete("/:id", facturaCtrl.deleteFactura);

export default router;
