import { Router } from 'express'
import  StreamController from '../controller/stream.controller'

const router =  Router();
const streamController = new StreamController();

router.get('/', (req, res) => streamController.saveStream(req, res))

export default router;