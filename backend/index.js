import express from 'express';
import dotenv from 'dotenv';
import projectsRouter from './routes/projectsRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/projects', projectsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
