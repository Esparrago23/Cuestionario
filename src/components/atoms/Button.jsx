
import styled from "styled-components";

const ButtonStyled = styled.button`
     background-color: #8885ef;
  color: white;
  text-decoration: none;
  border: 2px solid transparent;
  font-weight: bold;
  padding: 5px 17px;
  border-radius: 30px;
  transition: transform.4s;
  display: flex;
  align-items: center;
    &:hover {
      background-color: #3a43a3;
    }
    
`;


function Button({title,onClick}) {
    return (
        <ButtonStyled onClick={onClick}>{title}</ButtonStyled>
      );
}

export default Button;