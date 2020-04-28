import React, { useEffect, useState, Component } from 'react';
// import logoSiex from '../../assets/siex.png';
import { Link } from 'react-router-dom';
import expiryData from '../../services/expiryData';
import {
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaFileAlt,
  FaUserCircle,
} from 'react-icons/fa';

import {
  DivUserAcessModifyed,
  DivLinkModifyed,
  ProfileDataView,
  EditedContainer,
  AsideEdited,
} from './styles';
import {
  BigContainer,
  MenuSup,
  Container,
  Side,
  Divisor,
  Title,
} from '../../global/styles/styles';

// DEVELOPMENT
export default class Profile extends Component {
  state = {
    token: {},
    userData: {},
  };
  componentDidMount() {
    const getTkn = expiryData.getWithExpiry('token');
    const getData = expiryData.getWithExpiry('userData');
    if (getTkn.jwt_token || getData) {
      this.setState({
        token: getTkn,
        userData: getData,
      });
    }
  }
  valueshandler = () => {
    const { userData } = this.state;

    if (userData.nome) {
      const nome = userData.nome.split(' ');
      return {
        id: userData.id,
        nome,
        notSplitedName: userData.nome,
        email: userData.email,
      };
    }
    return null;
  };
  // const [token, setToken] = useState({});
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   const tkn = expiryData.getWithExpiry('token');
  //   setToken({ token: tkn });
  //   const userDt = expiryData.getWithExpiry('userData');
  //   setUserData({ userData: userDt });
  // }, []);

  // async function getData() {}
  // const { nome, email, id } = userData;
  // console.log(token);
  // console.log(userData);
  // console.log(nome, email, id);

  render() {
    const dados = this.valueshandler();
    // while(dados === null)
    return (
      <BigContainer>
        <MenuSup>
          <Title>
            {/* <img src={logoSiex} alt="Logosiex"/> */}
            Siepex
          </Title>

          <DivUserAcessModifyed>
            <DivLinkModifyed>
              <p>
                {dados
                  ? dados.nome[0] + ' ' + dados.nome[1]
                  : 'Session Expired'}
              </p>
            </DivLinkModifyed>
            <DivLinkModifyed>
              <button to="/login">
                <FaSignInAlt size={16} />
                SAIR
              </button>
            </DivLinkModifyed>
          </DivUserAcessModifyed>
        </MenuSup>
        <EditedContainer>
          <AsideEdited>
            <Divisor>
              <Link to="/">
                <FaHome />
                Inicio
              </Link>

              <Link to="/">
                <FaFileAlt />
                Artigos
              </Link>

              <Link to="/profile">
                <FaUserCircle />
                Perfil
              </Link>
            </Divisor>
          </AsideEdited>

          <main>
            <ProfileDataView>
              <h1>{`Bem vindo, ${
                dados ? dados.nome[0] + ' ' + dados.nome[1] : ''
              }`}</h1>
            </ProfileDataView>
          </main>
        </EditedContainer>
      </BigContainer>
    );
  }
}
