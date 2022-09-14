import { Router } from "express";
import AdressControler from "../Address/controller/Address.controller";

const router = Router()
const addressController = new AdressControler()

router.post('/address', addressController.createAddress)

router.get('/:id', addressController.findById)

router.get('/', addressController.listAddress)

router.put('/newAddress/:id', addressController.updateAdress)

export default router;