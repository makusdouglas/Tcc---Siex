import {Router} from 'express';
import UserController from './Controllers/UserController';
import SessionController from './Controllers/SessionController';
const router = Router();

//listar users = DEVELOPMENT
router.get('/users', UserController.index);
//Login
router.post('/login', SessionController.create);

router.post('/users/create', UserController.create);

export default router;