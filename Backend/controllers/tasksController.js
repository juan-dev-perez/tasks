const tasks = [
    {
        title: 'Crear Portafolio',
        description: 'Creacion de portafolio para mostrar proyectos'
    },
    {
        title: 'Desarrollar proyectos',
        description: 'Continuar con el proyecto de tasks'
    },
    {
        title: 'Aprendizaje',
        description: 'Aprender typescript'
    }
];

export const tasksController = {
    getTask : (req, res) => {
        res.send(tasks);
    },
    createTask : (req, res) => {
        tasks.push();
        res.send(tasks)
    }
}