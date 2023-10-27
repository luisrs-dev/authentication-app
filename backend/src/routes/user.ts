import { Router } from 'express'
import { getItems } from '../controllers/user';

const router =  Router();

router.get('/', getItems)

export { router }