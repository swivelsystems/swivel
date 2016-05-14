import express from 'express'
import * as instructorsService from '../services/instructorsService.js';
const instructorsRouter = express.Router();

instructorsRouter.route('/courses/:id')
  .get(instructorsService.retrieveCourses);

export default instructorsRouter;

