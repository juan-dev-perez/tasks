import { tasksService } from "../services/tasks.service.js";

export const tasksController = {
    getAll : async (req, res) => {
        const data = await tasksService.getAll();
        res.send(data);
    },
    getOne : async (req, res) => {
        const id = req.params.id;
        const data = await tasksService.getOne(id);
        res.send(data);
    },
    createTask : async (req, res) => {
        const data = await tasksService.createTask(req.body);
        res.status(201).json({
            message: "Task created",
            status: 201,
            data: data
        });
    },
    updateTask: async (req, res) => {
        const id = req.params.id;
        const data = await tasksService.updateTask(req.body, id);
        res.status(200).json({
            message: "Task updated",
            status: 200,
            data: req.body
        });
    },
    deleteTask: async (req, res) => {
        const id = req.params.id;
        const data = await tasksService.deleteTask(id);
        res.status(200).json({
            message: "Task deleted",
            status: 200,
            data: data
        });
    }
}





// const Task = require('../models/Task');

// module.exports = {
//   async index(req, res) {
//     const tasks = await Task.findAll();
//     res.json(tasks);
//   },

//   async create(req, res) {
//     const { title, description } = req.body;

//     if (!title || !description) {
//       return res.status(400).json({ error: 'Title and description are required.' });
//     }

//     const task = await Task.create({ title, description });
//     res.json(task);
//   },

//   async update(req, res) {
//     const { title, description, done } = req.body;
//     const { id } = req.params;

//     const task = await Task.findByPk(id);

//     if (!task) {
//       return res.status(404).json({ error: 'Task not found.' });
//     }

//     task.title = title || task.title;
//     task.description = description || task.description;
//     task.done = done || task.done;

//     await task.save();

//     res.json(task);
//   },

//   async delete(req, res) {
//     const { id } = req.params;

//     const task = await Task.findByPk(id);

//     if (!task) {
//       return res.status(404).json({ error: 'Task not found.' });
//     }

//     await task.destroy();

//     res.sendStatus(204);
//   },
// };