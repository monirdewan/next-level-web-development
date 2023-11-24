import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller
router.post('/create-student', StudentControllers.createStudent);

//get Router
router.get('/', StudentControllers.getAllStudents);

//get Router For A single Data
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
