import {  Question } from "./Question.mjs"
import { list } from "./dependecies.mjs"

export class Cuestionario{
    
    
    addQuestionA(pregunta,respuesta){
    
     let question=new Question()
     
     question.setId(1)
     question.setPregunta(pregunta)
     question.setRespuesta(respuesta)
     list.push(question)
    }
    addQuestionB(pregunta,respuesta1,respuesta2){
    
        let question=new Question()
        question.setId(2)
        question.setPregunta(pregunta)
        question.setRespuestaf(respuesta2)
        question.setRespuestav(respuesta1)
        list.push(question)
    }

    addQuestionC(pregunta,respuesta1,respuesta2,respuesta3,respuesta4){
    
        let question=new Question()
        question.setId(4)
        question.setPregunta(pregunta)
        question.setRespuesta1(respuesta1)
        question.setRespuesta2(respuesta2)
        question.setRespuesta3(respuesta3)
        question.setRespuesta4(respuesta4)
        list.push(question)
    }
        

    seeCuestionario(i){
        let pregunta= list.getElementAt(i);
        
        
        if(pregunta!=null){
            
            return pregunta;
        }
    }
    countCuestionario(){
        return list.size();
    }
}