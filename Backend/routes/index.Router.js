import { Router } from 'express';
import tasksRouter from './tasks.Router.js';

const router = Router();

router.use('/tasks',tasksRouter);
// router.get('*', (req, res) => {
//     res.redirect('/');
// });

export default router;