import { useNavigate, Link } from "react-router-dom";
import Button from "../atoms/Button";
import "./ControladorPages.css"
function ControladorPages() {
    const navigate = useNavigate()

    const handleClickC = (e) => {
        navigate("/")
    }
    const handleClickE = (e) => {
        navigate("/update")
    }
    const handleClickV = (e) => {
        navigate("/view")
    }
    const handleClickG = (e) => {
        navigate("/generate")
    }
    return(
        <div id="controlador">
            <Button title="Preguntas Abiertas" onClick={handleClickC}/>
            <Button title="Preguntas multiple" onClick={handleClickE}/>
            <Button title="Preguntas verdad/falso" onClick={handleClickV}/>
            <Button title="Generar Cuestionario" onClick={handleClickG}/>
        </div>
    );
}
export default ControladorPages;