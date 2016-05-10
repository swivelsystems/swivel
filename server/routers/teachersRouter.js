import express from 'express';
import * as teachersService from '../services/teachersService.js';
const teachersRouter = express.Router();

teachersRouter.route('/:id')
  .get(teachersService.retrieve);

export default teachersRouter;
