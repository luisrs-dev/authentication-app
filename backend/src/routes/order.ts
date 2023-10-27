import { Router } from 'express'
import { getItems } from '../controllers/orders';
import { checkJwt } from '../middleware/checkJwt';

const router =  Router();

router.get('/', checkJwt,  getItems)


export { router }