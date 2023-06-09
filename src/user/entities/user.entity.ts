/* eslint-disable prettier/prettier */
import { Answers, Class, MachineLearning } from '@prisma/client';

export class User {
  id?: string;
  email: string;
  hashedPassword: string;
  name: string;
  responsible?: boolean;
  score?: number;
  ra?: string;
  firstLogin?: boolean;  
  Answers?: Answers[];
  Class?: Class[];
  MachineLearning?: MachineLearning[];
}
