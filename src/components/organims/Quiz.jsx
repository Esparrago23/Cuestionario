import { useState } from "react";
import Button from "../atoms/Button";
import Swal from "sweetalert2";
import './CreacionCuestionario.css';
import ControladorPages from "../molecules/ControladorPages";
import { cuestionario } from "../../Data/dependecies.mjs";
import Preguntas from "../molecules/Preguntas";

function Quiz() {
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [resultados, setResultados] = useState("");

  const handlerClick = () => {
    const newPreguntasAbiertas = [];
    for (let v = 0; v < cuestionario.countCuestionario(); v++) {
      let b = cuestionario.seeCuestionario(v);
      newPreguntasAbiertas.push(b);
    }
    setPreguntas(newPreguntasAbiertas);
  };

  const handleClick = () => {
    let calificacion = 0;

    preguntas.forEach((item, index) => {
      const respuesta = respuestas[index];
      console.log(item.getRespuesta4()+"="+respuesta)
      if (item.getTipo() === "abierta" && item.getRespuesta() === respuesta) {
        calificacion++;
      } else if (item.getTipo() === "Falso/verdadero" && item.getRespuestav() === (respuesta)) {
        calificacion++;
      } else if (item.getTipo() === "Multiple" && item.getRespuesta4() === respuesta) {
        calificacion++;
      }
    });

    setResultados(calificacion);

    Swal.fire({
      title: "Calificación",
      text: `Tu calificación es: ${calificacion}`
    });
  };

  const handleResponseChange = (index, value) => {
    setRespuestas(prevState => ({
      ...prevState,
      [index]: value
    }));
  };

  return (
    <div id="Creador">
      <ControladorPages />
      <div id="form_login-box">
        <Button title="Mostrar" onClick={handlerClick} />
        <div>
          <ol>
            {preguntas.map((item, index) => (
              <Preguntas
                tipo={item.getTipo()}
                key={item.getId()}
                text={item.getPregunta()}
                texta={item.getRespuesta()}
                text1={item.getRespuesta1()}
                text2={item.getRespuesta2()}
                text3={item.getRespuesta3()}
                text4={item.getRespuesta4()}
                textv={item.getRespuestav()}
                textf={item.getRespuestaf()}
                val={respuestas[index] || ""}
                fnval={value => handleResponseChange(index, value)}
              />
            ))}
          </ol>
        </div>
        <Button title="Enviar" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Quiz;