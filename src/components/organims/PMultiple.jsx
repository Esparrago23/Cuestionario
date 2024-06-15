
import Button from "../atoms/Button";
import Swal from "sweetalert2";
import { useState } from "react";
import Field from "../molecules/Field";
import ControladorPages from "../molecules/ControladorPages";
import "./PMultiple.css"
import { cuestionario } from "../../Data/dependecies.mjs";
function PMultiple() {
    const [questionC,setQuestionC] = useState('')
  const [respuestaCF1,setRespuestaCF1] = useState('')
  const [respuestaCF2,setRespuestaCF2] = useState('')
  const [respuestaCF3,setRespuestaCF3] = useState('')
  const [respuestaCV,setRespuestaCV] = useState('')
  const tipo="Multiple"
    const handlerClick=(event) =>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Pregunta Creada",
            showConfirmButton: false,
            timer: 1500
          });
        cuestionario.addQuestion(questionC,undefined,respuestaCF1,respuestaCF2,respuestaCF3,respuestaCV,undefined,undefined,tipo)
        console.log(questionC+" = "+respuestaCF1 +"/"+respuestaCF2+respuestaCF3 +"/"+respuestaCV)
         }
    return(
        <div id="Creador">
            <ControladorPages></ControladorPages>
            <div id="form_login-box">
            <Field placeholder="Ingrese la pregunta aqui" val={questionC} fnval={setQuestionC} />
            <div id="a">
            <Field placeholder="Ingrese la respuesta falsa " val={respuestaCF1} fnval={setRespuestaCF1}/>
            <Field placeholder="Ingrese la respuesta falsa " val={respuestaCF2} fnval={setRespuestaCF2}/>
            <Field placeholder="Ingrese la respuesta falsa" val={respuestaCF3} fnval={setRespuestaCF3}/>
            <Field placeholder="Ingrese la respuesta correcta " val={respuestaCV} fnval={setRespuestaCV}/>
            </div>
            
            
            <Button title="Crear" onClick={handlerClick} />
            </div>
        </div>
    );
}
export default PMultiple;