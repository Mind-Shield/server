/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMlDto } from './dto/create-ml.dto';

@Injectable()
export class MLService {
  private model: any;

  constructor(private readonly prisma: PrismaService) {
  }

  async predict(userId: string, dto: CreateMlDto){
    let medResponse;
    let resultsMl = "";

    const options = {
      args: dto.answers
    };

    await PythonShell.run('model_loader.py', options).then((messages) => {
      console.log('finished python 2');
      messages = messages[messages.length - 1];
      console.log('results: %j', messages);
      medResponse = messages;
    })

    medResponse = parseInt(medResponse)

    if(medResponse == 5){
      resultsMl = "Atenção imediata"
    }else if(medResponse == 4){
      resultsMl = "Sugerir ajuda psicologica"
    } else if(medResponse == 3 || medResponse == 2){
      resultsMl = "Manter em observação"
    } else if(medResponse == 1 || medResponse == 0){
      resultsMl = "Positivamente bem"
    }
    

    const createMlTable = await this.prisma.machineLearning.create({
      data: {
        userID: userId,
        typeOfTest: dto.typeTest,
        results: resultsMl,
      },
    })

    createMlTable
    const listQuestions = dto.question;

    for( let i = 0; i < listQuestions.length; i++ ){
      await this.prisma.answers.create({
        data: {
          userID: userId,
          machineLearningID: createMlTable.id,
          question: (dto.question)[i],
          response: (dto.answers)[i],
        },
      })
    }
    return;
  }
}
