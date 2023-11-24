import { StudentModel } from './student.model';
import { Student } from './student.interface';

const createStudentIntroDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

//get method
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//get Single Student

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntroDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
