import express from 'express';
import { loadEnvFile } from 'node:process';

loadEnvFile('.env');

const app = express();
const port = process.env.PORT;

console.log(`Port: ${port}`);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
