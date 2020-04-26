import styled from "styled-components";
import { Container, Side } from "../../global/styles/styles";

export const EditedContainer = styled(Container)`
  display: flex;
  flex: 1;
  margin-top: 0px;
  margin: 0px;
  flex-direction: column;
  /* justify-content: ; */
  align-items: center;
  width: min-content;

  main {
    min-width: 100%;
    margin-left: 0px;
    margin-left: 0px;
    margin-top: 190px;
    border-radius: 20px;
  }
`;
// CSS de ELEMENTOS DE MAIN

export const AsideEdited = styled(Side)`
  position: fixed;
  margin-top: 100px;
  border-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  flex: 0;
  width: 50%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */

  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 10px 10px;
    padding: 10px 5px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    :hover {
      width: auto;
    }
    a {
      display: flex;
      flex: 0;
      margin: 0px;
      padding: 2px 5px;
      min-width: auto;
      width: auto;
    }
  }
`;

export const Card = styled.form`
  /* width:100%; */
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  /* border: 1px solid #ccc; */
  /* box-shadow : 0 0 19px 0 rgba(0, 0, 0, 0.2); */
  h1 {
    color: #000;
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #0057ff;
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s;
  }
`;

export const InputDiv = styled.div`
  & + & {
    margin-top: 20px;
  }
  p {
    font-size: 16px;
    color: #0057ff;
  }
  input {
    height: 32px;
    border: 0;
    border-bottom: 1px solid #ccc;
  }
`;
