import Input from "../atoms/Input";
import Label from "../atoms/Label";


function Field(props) {
    return (
        <div>
            <Label name={props.name} text={props.text}/>
            <Input type={props.type} placeholder={props.placeholder} val={props.val} fnval={props.fnval}/>
        </div>
      );
}

export default Field;