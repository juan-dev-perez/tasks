import { Router } from 'express';
import { tasksController } from '../controllers/tasks.controller.js'

const tasksRouter = Router();

tasksRouter.get('/', tasksController.getAll );
tasksRouter.get('/:id', tasksController.getOne );
tasksRouter.post('/', tasksController.createTask);
tasksRouter.put('/:id', tasksController.updateTask);
tasksRouter.delete('/:id', tasksController.deleteTask);

export default tasksRouter;