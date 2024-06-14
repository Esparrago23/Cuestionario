function Select(props) {
    const handlerOnChange = (event)=>{
        props.fnval(event.target.value)
    }
    return (
        <div>
            <select   onChange={handlerOnChange}>
            <option value="abierta" >Abierta</option>
            <option value="multiple" >Multiple</option>
            <option value="vf"  >Verdad/falso</option>
            </select>
        </div>
      );
}

export default Select;