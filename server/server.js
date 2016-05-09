import express from 'express';
import bodyParser from 'body-parser';
import studentsRouter from './routers/studentsRouter.js';
import teachersRouter from './routers/teachersRouter.js';
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/../client/`));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api/students', studentsRouter);
app.use('/api/teachers', teachersRouter);

app.listen(port, (err) => {
  if (err) { throw new Error(err); }
  console.log('Swivel server listening on port: ' + port);
});
