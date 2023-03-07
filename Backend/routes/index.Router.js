import { Router } from 'express';
import tasksRouter from './tasks.Router.js';

const router = Router();

router.use('/tasks',tasksRouter);

export default router;