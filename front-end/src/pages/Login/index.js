import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import {
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaFileAlt,
  FaUserCircle,
} from 'react-icons/fa';

import { EditedContainer, AsideEdited, Card, InputDiv } from './styles';
import {
  BigContainer,
  MenuSup,
  DivUserAcess,
  Divisor,
  DivLink,
  Title,
} from '../../global/styles/styles';

// DEVELOPMENT
// import {Buttons} from '../../global/components/buttonsList';

export default function Login() {
  let history = useHistory();
  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');

  function handleResponse(response) {
    if (response.status === 200) {
      if (window.confirm(`Bem vindo ${response.data.user.nome}`)) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.user));

        // console.log(localStorage.getItem("token"));
        // console.log(JSON.parse(localStorage.getItem("userData")));
        history.push('/');
      }
    }
    if (response.status > 200) {
      return alert(`${response.statusText}`);
    }
  }

  async function checkUserExists({ id, senha }) {
    let response = {
      data: {},
      status: 200,
      statusText: null,
    };
    try {
      response = await api.post('/login', {
        id,
        senha,
      });
    } catch (error) {
      response.status = 400;
      response.statusText = error.response.data.error;
      console.log(error.response);
    }
    // console.log(response);
    return response;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id,
      senha,
    };

    const response = await checkUserExists(data);

    handleResponse(response);
  }

  return (
    <BigContainer>
      <MenuSup>
        <Title>
          {/* <img src={logoSiex} alt="Logosiex"/> */}
          Siepex
        </Title>

        <DivUserAcess>
          <DivLink>
            <Link to="/login">
              <FaSignInAlt size={16} />
              ENTRAR
            </Link>
          </DivLink>
          <DivLink>
            <Link to="/signin">
              <FaUserPlus size={16} />
              CADASTRAR-SE
            </Link>
          </DivLink>
        </DivUserAcess>
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
          <Card onSubmit={handleSubmit}>
            <h1>Login</h1>

            <InputDiv>
              <p>Nº de matrícula *:</p>
              <input
                name="id"
                type="number"
                required
                placeholder="Digite aqui"
                onChange={(e) => setId(e.target.value)}
              />
            </InputDiv>

            <InputDiv>
              <p>Senha *:</p>
              <input
                name="password"
                type="password"
                required
                placeholder="Insira sua senha"
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="none"
              />
            </InputDiv>

            <button type="submit">ENVIARrrr </button>
          </Card>
        </main>
      </EditedContainer>
    </BigContainer>
  );
}
