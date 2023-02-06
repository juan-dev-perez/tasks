import express from 'express';
import cors from 'cors';
import router from '../routes/index.Router.js'

const app = express();

export const server = () => {
    app.use(cors());
    app.use(express.json());
    app.use(router);
    
    app.listen(8080,() => {
        console.log('servidor levantado en el puerto 8080');
    });
}