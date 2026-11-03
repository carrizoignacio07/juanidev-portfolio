// Import dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

// Import routers
import projectsRouter from './routes/projectsR.js';
import thanksRouter from './routes/thanksR.js';
import coursesRouter from './routes/coursesR.js';
import technologiesRouter from './routes/technologiesR.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors('*'));
app.use('/api/projects', projectsRouter);
app.use('/api/thanks', thanksRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/technologies', technologiesRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}: http://localhost:${port}`);
});
