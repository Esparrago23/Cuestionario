import { useState } from "react";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Swal from "sweetalert2";


import './CreacionCuestionario.css'
import ControladorPages from "../molecules/ControladorPages";
import { cuestionario } from "../../Data/dependecies.mjs";
import Label from "../atoms/Label";
import Preguntas from "../molecules/Preguntas";

function Quiz() {
  const [preguntasAbiertas,setPreguntasa] = useState([])
  
  const [respuesta1,setRespuesta1] = useState('')
  const [respuestasAbiertas,setRespuestasa] = useState([])
 
  let v=0
 
  const handlerClick=(event) =>{
    console.log(cuestionario.countCuestionario())
    /*
    let lista = [];
        let repetido;
        for (let i = 0; i < cuestionario.countCuestionario(); i++) {
            while (!lista[i]) {
                repetido = true;
                while (repetido == true) {
                    let random = Math.random();
                    console.log(cuestionario.countCuestionario() )
                    random = random * cuestionario.countCuestionario() ;
                    random = Math.trunc(random);
                    for (let j = 0; j < lista.length; j++) {
                        if (lista[j] == random) {
                            repetido = true;
                            break;
                        } else {
                            repetido = false;
                        }
                    }
                    lista[i] = random;
                }

            }
          }
        */
    const newPreguntasAbiertas = [];
    
  
     for(v;v<cuestionario.countCuestionario();v++){
     
      console.log(v)
        let b=cuestionario.seeCuestionario(/*lista[v]-1*/v)
       
        
            newPreguntasAbiertas.push(b);
        
            
     }
     
     setPreguntasa(newPreguntasAbiertas);
     
     
  }
  const handleClick=(event) =>{
    Swal.fire({
      
      title: "Respuesta correcta",
      
    });
    console.log(respuesta1+" = "+texta)
    const newRespuestasAbiertas = [];
    for(v=0;v<cuestionario.countCuestionario()&&v<10;v++){
      console.log(v)
        let b=cuestionario.seeCuestionario(/*lista[v]-1*/v)
        newRespuestasAbiertas.push(b);
       
     }
     setRespuestasa(newRespuestasAbiertas);
  }
    
  return (
    <>
      <div id="Creador">
        <ControladorPages />
        <div id="form_login-box">
          <Button title="Mostrar" onClick={handlerClick} />
          <div>
            <ol>
              {preguntasAbiertas.map((item, index) => (
                <Preguntas
                  key={`abierta-${index}`}
                  text={item.getPregunta()}
                  val={respuesta1} fnval={setRespuesta1}
                  texta={item.getRespuesta()}
                  text1={item.getRespuesta1()}
                  text2={item.getRespuesta2()}
                  text3={item.getRespuesta3()}
                  text4={item.getRespuesta4()}
                  textv={item.getRespuestav()}
                  textf={item.getRespuestaf()}
                />
              ))}
             
            </ol>
          </div>
          <Button title="Enviar" onClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Quiz;
