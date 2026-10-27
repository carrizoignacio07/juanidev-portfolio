import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectsRouter from './routes/projectsRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors('*'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/projects', projectsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
