import { Router } from "express";
import ServiceOrdenController from "../serviceOrder/controller/ServiceOrder.controller"

const serviceOrdenController = new ServiceOrdenController()
const router = Router()

router.post('/serviceOrder', serviceOrdenController.idServiceOrden)

router.get('/:internalId', serviceOrdenController.getByServiceOrdenId)


export default router