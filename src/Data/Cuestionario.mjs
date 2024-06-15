import {  Question } from "./Question.mjs"
import { list } from "./dependecies.mjs"

export class Cuestionario{
    
    
    addQuestion(pregunta,respuesta,respuesta1,respuesta2,respuesta3,respuesta4,respuestaf,respuestav,tipo){
        
    let question=new Question()
    
    if(tipo=="abierta"){
        question.setTipo(tipo)
        question.setId(this.countCuestionario()+1)
        question.setPregunta(pregunta)
        question.setRespuesta(respuesta)
    }else if(tipo=="Falso/verdadero"){
        question.setPregunta(pregunta)
        question.setTipo(tipo)
        question.setId(this.countCuestionario()+1)
        question.setRespuestaf(respuestaf)
        question.setRespuestav(respuestav)
    }else if(tipo="Multiple"){
        question.setId(this.countCuestionario()+1)
        question.setTipo(tipo)
        question.setPregunta(pregunta)
        question.setRespuesta1(respuesta1)
        question.setRespuesta2(respuesta2)
        question.setRespuesta3(respuesta3)
        question.setRespuesta4(respuesta4)
    }
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