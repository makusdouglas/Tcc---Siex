import React, {useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import { 
  FaSignInAlt, 
  FaUserPlus, 
  FaHome,
  FaFileAlt, 
  FaUserCircle 
} from 'react-icons/fa';


import {
  EditedContainer,
  AsideEdited,
  Card,
  InputDiv
} from './styles';
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



  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');
  function handleResponse(response){
    if(response.status === 200) {

      if (window.confirm(`Bem vindo ${response.data.nome}`)){
        navigator.navigate('/')
      }
    }
    if(response.status === 400) {

      return alert(`Usuário não encontrado, sugerimos ir para tela de cadastro. ( Status: ${response.status})`);
    }
  }


  
  async function checkUserExists(id){
    let response= {
      data: {},
      status : 0,
    }
    try {
      response = await api.post('/login', {
        id,
      });
      
    } catch (error) {
      response.status = 400;
      console.log(error);      
    }      
  console.log(response);
  return response;
    
  }

  
  async function handleSubmit(e ){

    e.preventDefault();
    const data= {
      id,
      senha
    }

    const response = await checkUserExists(data.id);

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
          <Link to="/login" >
            <FaSignInAlt size={16}  />
            Entrar
          </Link>
        </DivLink>
        <DivLink>
          
          <Link to="/signin" >
            <FaUserPlus size={16} />
            Cadastar-se
            </Link>
        </DivLink>
      </DivUserAcess>
      

  </MenuSup>
  <EditedContainer>
     
    <AsideEdited>
    <Divisor >
            <Link to="/" >
              <FaHome />
              Inicio 
            </Link>

            <Link to="/" >
              <FaFileAlt />
              Artigos 
            </Link>
            
            <Link to="/profile" >
              <FaUserCircle />
              Perfil 
            </Link>
            
        </Divisor>
    </AsideEdited> 
      
      <main>
        
          <Card onSubmit={handleSubmit} >
            <h1>Login</h1>

            <InputDiv>
            <p>Nº de matrícula *:</p>
            <input 
              name="id"
              type="number"
              required
              placeholder="Digite aqui"
              onChange={ e => setId(e.target.value)}
            />
            </InputDiv>

            <InputDiv>
            <p>Senha *:</p>
            <input
              name="password"
              type="password"
              required
              placeholder="Insira sua senha"
              onChange={ e => setSenha(e.target.value)}
              autoComplete="none"
            />
            </InputDiv>

          <button type="submit" >ENVIARrrr </button>
          
          
        </Card>
          
        
        
      </main>
    
  </EditedContainer>
  </BigContainer>
  );
}


