
export class Question {
    #id
    #pregunta
    #respuesta
    #respuesta1
    #respuesta2
    #respuesta3
    #respuesta4
    #respuestav
    #respuestaf
    
    
   setId(id){this.#id=id}
   getId(){return this.#id}

   setPregunta(pregunta){this.#pregunta=pregunta}
   getPregunta(){return this.#pregunta}

   

    getRespuesta(){return this.#respuesta}
    setRespuesta(respuesta){this.#respuesta=respuesta}

    getRespuesta1(){return this.#respuesta1}
    setRespuesta1(respuesta1){this.#respuesta1=respuesta1}

    getRespuesta2(){return this.#respuesta2}
    setRespuesta2(respuesta2){this.#respuesta2=respuesta2}

    getRespuesta3(){return this.#respuesta3}
    setRespuesta3(respuesta3){this.#respuesta3=respuesta3}
    
    getRespuesta4(){return this.#respuesta4}
    setRespuesta4(respuesta4){this.#respuesta4=respuesta4}

    getRespuestav(){return this.#respuestav}
    setRespuestav(respuestav){this.#respuestav=respuestav}
    getRespuestaf(){return this.#respuestaf}
    setRespuestaf(respuestaf){this.#respuestaf=respuestaf}
    
    }