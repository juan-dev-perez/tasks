import express from 'express';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from '../routes/index.Router.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

export const server = () => {
    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.use(express.static(join(__dirname, '../../Frontend/dist')));
    
    app.listen(8080,() => {
        console.log('servidor levantado en el puerto 8080');
    });
}