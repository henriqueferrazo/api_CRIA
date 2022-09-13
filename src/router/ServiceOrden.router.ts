import router from "./Address.router";
import ServiceOrdenController from "../serviceOrden/controller/ServiceOrden.controller";

const serviceOrdenController = new ServiceOrdenController()


router.post('/serviceOrder', serviceOrdenController.idServiceOrden)

router.get('/:internalId', serviceOrdenController.getByServiceOrdenId)


export default router