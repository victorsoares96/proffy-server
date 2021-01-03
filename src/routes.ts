import { Router } from 'express';
import authMiddleware from './middlewares/auth';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UsersController';
import FavoritesController from './controllers/FavoritesController';

const routes = Router();
const classesController = new ClassesController();
const connectionController = new ConnectionsController();
const sessionController = new SessionController();
const userController = new UserController();
const favController = new FavoritesController();

routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);

routes.use(authMiddleware);

routes.post('/classes/:id', classesController.store);
routes.put('/classes/:id', classesController.update);
routes.get('/classes', classesController.index);
routes.get('/classes/:class_id', classesController.show);

routes.post('/connections', connectionController.store);
routes.get('/connections', connectionController.index);

routes.put('/users/:id', userController.update);
routes.get('/users/:id', userController.show);

routes.get('/favorites/:user_id', favController.index);
routes.post('/favorites/:user_id', favController.store);
routes.delete('/favorites/:class_id', favController.delete);

export default routes;