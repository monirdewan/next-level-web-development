import { Schema, model, connect } from 'mongoose';


export type  Guardian = {
    fatherName:string;
    fatherOccupation:string;
    fatherContatNo:string;
    motherName:string;
    motherOccupation:string;
    motherContatNo:string;
}
export type Student = {
    id:string;
    name: {
        firstName:string;
        middleName:string;
        lastName:string;
    };
    gender:"male" | "female";
    dateOfBirth:string;
    email: string;
    contacNo : string;
    emergencyContactNo: string;
    bloodGroup?:'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

    presentAddress:string;
    permanentAddress:string;
    guardian:Guardian;



  }