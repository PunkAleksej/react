import styled, {css} from "styled-components";
import completeImg from '../imgs/check-mark.png'
import deleteImg from '../imgs/trash.png'

export const Div = styled.div`
  border-radius: 10px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;

  .task_text {
    width: 100%;
    border: 1px solid #83b4eb;
    border-radius: 10px;
    font-size: 40px;
    padding-left: 5px;
    @media (max-width: 1280px) {
      font-size: 20px;
    }
    color: ${(p) => p.isActive ? 'green' : 'tomato'};
    ${(props) => !props.isActive ? css`
      background-color: #ccc;
    ` : css`

    `}
  }
`;

export const Button = styled.button`
border-radius: 10px;
background-size: cover;
min-width: 64px;
min-height: 64px;
font-size: 0px;
box-sizing: border-box;
@media (max-width: 1280px) {
  min-width: 32px;
  min-height: 32px;
}
`;

export const ButtonComplete = styled(Button)`
background-color: #42e3bd;
background-image: url(${completeImg});

`;

export const ButtonDelete = styled(Button)`
background-color: #eb3b64;
background-image: url(${deleteImg});
`;

