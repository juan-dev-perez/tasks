import { Task as Tasks } from "../models/task.model.js";

export const tasksService = {
    getAll : async () => {
        await Tasks.sync();
        const response = await Tasks.findAll();
        return response;
    },
    getOne : async (id) => {
        await Tasks.sync();
        const response = await Tasks.findOne({
            where: {
                id : id
            }
        });
        return response;
    },
    createTask : async (data) => {
        await Tasks.sync();
        const response = await Tasks.create(data);
        return data;
    },
    updateTask : async (data, id) => {
        await Tasks.sync();
        const response = await Tasks.update(data,{
            where : {
                id : id
            }
        });
        return response;
    },
    deleteTask : async (id) => {
        await Tasks.sync();
        const response = await Tasks.destroy({
            where: {
                id : id
            }
        });
        return response;
    }
}