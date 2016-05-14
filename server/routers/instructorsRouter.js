import express from 'express'
import * as instructorsService from '../services/instructorsService.js';
const instructorsRouter = express.Router();

instructorsRouter.route('/home/:id')
  .get(instructorsService.retrieveHome);

instructorsRouter.route('/course/:id')
  .get(instructorsService.retrieveCourse);

export default instructorsRouter;

