import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectsRouter from './routes/projectsRoutes.js';
import thanksRouter from './routes/thanksRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors('*'));
app.use('/api/projects', projectsRouter);
app.use('/api/thanks', thanksRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
