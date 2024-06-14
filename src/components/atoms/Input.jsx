function Input(props) {

    const handlerOnChange = (event)=>{
        props.fnval(event.target.value)
    }
    return (
        <div>
            <input id="input" type={props.type} placeholder={props.placeholder} value={props.val} onChange={handlerOnChange}/>
        </div>
      );
}

export default Input;