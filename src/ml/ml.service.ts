/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MLService {
  private model: any;

  constructor(private readonly prisma: PrismaService) {
    this.loadModel();
  }

  loadModel() {
    PythonShell.run('model_loader.py', null).then(messages=>{
      console.log('finished');
      console.log('results: %j', messages[0]);
    });
  }

  async predict(userId: string, typeTest: string, question: string[], answers: string[]){
    // const responseMl= [];
    const vector = "";
    // let soma = 0;
    // let resultsMl = "";

    const prediction = this.model.predict(vector);


    // if (!this.model) {
    //   console.error('Model not loaded yet.');
    //   return null;
    // }

    // for(let i=0; i < answers.length; i++ ){
    //   const prediction = this.model.predict(answers[i]);
    //   responseMl.push(prediction);
    // }


    // for(let i = 0; i < responseMl.length; i++) {
    //   soma += responseMl[i];
    // }
    // console.log(soma);

    // if(soma == 5){
    //   resultsMl = "Atenção imediata"
    // }else if(soma == 4){
    //   resultsMl = "Sugerir ajuda psicologica"
    // } else if(soma == 3 || soma == 2){
    //   resultsMl = "Manter em observação"
    // } else if(soma == 1 || soma == 0){
    //   resultsMl = "Positivamente bem"
    // }
    

    // const createMlTable = await this.prisma.machineLearning.create({
    //   data: {
    //     userID: userId,
    //     typeOfTest: typeTest,
    //     results: resultsMl,
    //   },
    // })

    // createMlTable

    // for( let i = 0; i < question.length; i++ ){
    //   await this.prisma.answers.create({
    //     data: {
    //       userID: userId,
    //       machineLearningID: createMlTable.id,
    //       question: question[i],
    //       response: answers[i],
    //     },
    //   })
    // }
    return prediction;
  }
}
