import express from 'express';
import * as teachersService from '../services/teachersService.js';
const teachersRouter = express.Router();

teachersRouter.route('/home/:id')
  .get(teachersService.retrieveHome);

teachersRouter.route('/course/:id')
  .get(teachersService.retrieveCourse);

export default teachersRouter;
