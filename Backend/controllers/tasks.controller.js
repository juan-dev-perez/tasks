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