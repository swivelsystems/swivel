import express from 'express';
import * as studentsService from '../services/studentsService.js';
const studentsRouter = express.Router();

studentsRouter.route('/:id')
  .get(studentsService.retrieve);

export default studentsRouter;
