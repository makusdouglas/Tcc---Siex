import {Router} from 'express';
import UserController from './Controllers/UserController';
import SessionController from './Controllers/SessionController';

import authMiddleware from './middlewares/auth';
const router = Router();

//listar users = DEVELOPMENT
router.get('/users', UserController.index);
router.post('/users/create', UserController.create);
//Login
router.post('/login', SessionController.create);

//delete user
router.use(authMiddleware);

router.delete('/users', UserController.delete);


export default router;