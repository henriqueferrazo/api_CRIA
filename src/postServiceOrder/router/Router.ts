import { Router } from "express";
import AdressControler from "../controller/AddressController";

const router = Router()
const addressController = new AdressControler()

router.post('/serviceOrder', addressController.ListenServiceOrden)

router.get('/')

export default router;