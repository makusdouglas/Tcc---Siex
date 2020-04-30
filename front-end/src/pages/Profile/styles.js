import styled from 'styled-components';
import {
  DivUserAcess,
  Container,
  Side,
  Divisor,
  DivLink,
  Title,
} from '../../global/styles/styles';

// CSS de ELEMENTOS DE MAIN

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
    display: flex;
    flex: 1;
    min-width: 100%;
    margin-left: 0px;
    margin-left: 0px;
    margin-top: 160px;
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
export const DivUserAcessModifyed = styled(DivUserAcess)`
  margin: 0px;
  margin-right: 10px;
  padding: 15px;
  display: flex;
  flex: 0;
  align-items: center;
  max-height: 80px;
  background: hsl(220, 100%, 50%);
`;
export const DivLinkModifyed = styled(DivLink)`
  p {
    display: flex;
    flex: 1;
    margin-top: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    color: #fff;
    margin-right: 20px;
    min-width: 120px;
  }

  button {
    min-width: 100px;
    border: 0;
    text-decoration: none;
    margin-left: 10px;
    font-size: 18px;
    color: #0057ff;
    align-items: baseline;
    padding: 5px 8px;
    border-radius: 25px;
    margin-right: 5px;

    background: #fff;
    box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.4);
    :hover {
      color: #fff;
      background: #3377ff;
      svg {
        color: #fff;
      }
    }
  }
  svg {
    font-size: 16px;
    margin-right: 5px;
    color: #111;
  }

  @media (max-width: 490px) {
    button {
      font-size: 16px;
      margin-left: 5px;
    }
  }
`;
export const ProfileDataView = styled.div`
  padding: 20px;
  border: 1px solid #555;

  h1 {
    width: max-content;
    font-size: 22px;
    color: #333;
  }
`;
