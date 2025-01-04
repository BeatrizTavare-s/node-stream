import { Router } from 'express'
import  StreamController from '../controller/stream.controller'

const router =  Router();
const streamController = new StreamController();

router.get('/', streamController.saveStream)

export default router;