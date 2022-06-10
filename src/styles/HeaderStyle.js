import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 100%;
display: flex;
justify-content: space-evenly;
padding: 50px 0px;
@media (max-width: 1280px) {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0px;
}
`;

export const HeaderButton = styled.button`
  background-color: #83b4eb;
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 40px;
  text-align: center;
  width: 35%;
  margin: 10px;
  @media (max-width: 1280px) {
    background-color: #83b4eb;
    border: 2px solid blue;
    border-radius: 10px;
    font-size: 20px;
    margin: 0px;
    margin-bottom: 15px;
    text-align: center;
    width: 100%;
  }
`;
