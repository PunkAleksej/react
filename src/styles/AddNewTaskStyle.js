import styled from "styled-components";

export const Form = styled.form`
  border-radius: 10px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 25px;

  .text-input {
    width: 100%;
    border: 1px solid #83b4eb;
    border-radius: 10px;
    font-size: 40px;
    padding-left: 5px;
    @media (max-width: 1280px) {
      font-size: 20px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #83b4eb;
  border-radius: 10px;
  font-size: 40px;
  padding-left: 5px;

  @media (max-width: 1280px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  background-color: #42e3bd;
  border-radius: 10px;
  background-size: cover;
  min-width: 64px;
  min-height: 64px;
  min-width: 240px;
  font-size: 40px;
  background-image: none;
  @media (max-width: 1280px) {
  min-width: 0px;
  font-size: 20px;
  width: 30%;
  background-image: none;
}
`;