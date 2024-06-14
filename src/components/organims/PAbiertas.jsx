import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";


import './CreacionCuestionario.css'
import ControladorPages from "../molecules/ControladorPages";
import { cuestionario } from "../../Data/dependecies.mjs";

function PAbiertas() {
  

  const [questionA,setQuestionA] = useState('')
  const [respuestaA,setRespuestaA] = useState('')
 
  const handlerClick=(event) =>{
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Pregunta Creada",
        showConfirmButton: false,
        timer: 1500
      });
     cuestionario.addQuestionA(questionA,respuestaA)
  }
    
    return ( 
     <>
     <div id="Creador">
     <ControladorPages></ControladorPages>
        <div id="form_login-box">
        
          
          <Field placeholder="Ingrese la pregunta aqui"val={questionA} fnval={setQuestionA} />
          <Field placeholder="Ingrese la respuesta aqui" val={respuestaA} fnval={setRespuestaA}/>
          <Button title="Crear" onClick={handlerClick} />
        </div>
     </div>
     
     </>
    
     );
}

export default PAbiertas;