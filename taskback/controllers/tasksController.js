const tasks = [
    {
        title: 'Crear Portafolio',
        description: 'Creacion de portafolio para mostrar proyectos'
    }
];

const tasksController = {
    getTask : (req, res) => {
        res.send(tasks);
    },
    createTask : (req, res) => {
        tasks.push();
        res.send(tasks)
    }
}


module.exports = tasksController;