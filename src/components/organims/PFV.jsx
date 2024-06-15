import { useNavigate, Link } from "react-router-dom";
import Button from "../atoms/Button";
import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import ControladorPages from "../molecules/ControladorPages";
import { cuestionario } from "../../Data/dependecies.mjs";
function PFV() {
  const [questionB,setQuestionB] = useState('')
  const [respuestaBF,setRespuestaBF] = useState('')
  const [respuestaBV,setRespuestaBV] = useState('')
  const tipo="Falso/verdadero"
    const handlerClick=(event) =>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Pregunta Creada",
            showConfirmButton: false,
            timer: 1000
          });
        cuestionario.addQuestion(questionB,undefined,undefined,undefined,undefined,undefined,respuestaBF,respuestaBV,tipo)
        console.log(questionB+" = "+respuestaBF +"/"+respuestaBV)
         }
    return(
        <div id="Creador">
            <ControladorPages></ControladorPages>
            <div id="form_login-box">
            <Field placeholder="Ingrese la pregunta aqui" val={questionB} fnval={setQuestionB} />
            <Field placeholder="Ingrese la respuesta falsa aqui" val={respuestaBF} fnval={setRespuestaBF}/>
            <Field placeholder="Ingrese la respuesta correcta aqui" val={respuestaBV} fnval={setRespuestaBV}/>
            <Button title="Crear" onClick={handlerClick} />
            </div>
        </div>
    );
}
export default PFV;