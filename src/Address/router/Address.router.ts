import { Router } from "express";
import AdressControler from "../controller/Address.controller";

const router = Router()
const addressController = new AdressControler()

router.post('/serviceOrder', addressController.createServiceOrden)

router.get('/:id', addressController.findById)

router.get('/', addressController.listAddress)

export default router;