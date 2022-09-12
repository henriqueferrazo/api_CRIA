import { Router } from "express";
import AdressControler from "../controller/Address.controller";

const router = Router()
const addressController = new AdressControler()

router.post('/serviceOrder', addressController.createServiceOrden)

router.get('/:id', addressController.findById)

router.get('/', addressController.listAddress)

router.put('/newLocal/:id', addressController.updateAdress)

export default router;