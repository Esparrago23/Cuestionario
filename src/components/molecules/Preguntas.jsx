import Input from "../atoms/Input";
import Label from "../atoms/Label";

function Preguntas({ text, texta, textv, textf, text1, text2, text3, text4, val, fnval, tipo }) {
  const handlerOnChange = (event) => {
    fnval(event.target.value);
  };
console.log(textv+"="+textf)
  if (tipo === "Falso/verdadero") {
    return (
      <div>
        <label>{text}</label>
        <div id="a">
          <label>{textv}</label>
          <input
            type="radio"
            name={text}
            value={textv}
            onChange={handlerOnChange}
          />
          <label>{textf}</label>
          <input
            type="radio"
            name={text}
            value={textf}
            onChange={handlerOnChange}
          />
        </div>
      </div>
    );
  } else if (tipo === "Multiple") {
    return (
      <div>
        <label>{text}</label>
        <div id="a">
          <label>{text1}</label>
          <input
            type="radio"
            name={text}
            value={text1}
            onChange={handlerOnChange}
          />
          <label>{text2}</label>
          <input
            type="radio"
            name={text}
            value={text2}
            onChange={handlerOnChange}
          />
          <label>{text3}</label>
          <input
            type="radio"
            name={text}
            value={text3}
            onChange={handlerOnChange}
          />
          <label>{text4}</label>
          <input
            type="radio"
            name={text}
            value={text4}
            onChange={handlerOnChange}
          />
        </div>
      </div>
    );
  } else if (tipo === "abierta") {
    return (
      <div>
        <label>{text}</label>
        <input
          type="text"
          placeholder={texta}
          value={val}
          onChange={handlerOnChange}
        />
      </div>
    );
  }
}

export default Preguntas;