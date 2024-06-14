function Label(props) {
    
    return ( 
        <div >
            <label id="label" htmlFor={props.name}>{props.text}</label>
            
        </div>
     );
}

export default Label;