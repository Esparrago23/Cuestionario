import Input from "../atoms/Input";
import Label from "../atoms/Label";


function Preguntas({ text, texta, textv, textf, text1, text2, text3, text4 }) {


  
    if (textv !== undefined && textf !== undefined) {
       
        return (
          <div>
            <label>{text}</label>
            <div id="a">
              <label> {textv}</label>
              <input type="radio" name={text} value="true" />
              <label> {textf}</label>
              <input type="radio" name={text} value="false" />
            </div>
          </div>
        );
      } else if (text1 !== undefined && text2 !== undefined && text3 !== undefined && text4 !== undefined) {
        
        return (
          <div>
            <label>{text}</label>
            <div id="a">
              <label>  {text1}</label>
              <input type="radio" name={text}  />

              <label> {text2}</label>
              <input type="radio" name={text}  />

              <label> {text3}</label>
              <input type="radio" name={text}  />

              <label> {text4}</label>
              <input type="radio" name={text}  />
            </div>
          </div>
        );
      } else {
       
        return (
          <div >
            <label >{text}</label>
            <Input type="text" value={texta} placeholder={texta}   />
          </div>
        );
      }
    };

export default Preguntas;

