import React from 'react';
// import logoSiex from '../../assets/siex.png';
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
            <Link to="/" select >
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
        
          <Card>
            <h1>Login</h1>

            <InputDiv>
            <p>Nº de matrícula *:</p>
            <input 
              type="text"
              placeholder="Digite aqui"
            />
            </InputDiv>

            <InputDiv>
            <p>Senha *:</p>
            <input
              type="password"
              placeholder="Insira sua senha"
            />
            </InputDiv>

          <button 
          type="submit" 
          onClick={()=>{}}
          >ENVIAR </button>

          
        </Card>
          
        
        
      </main>
    
  </EditedContainer>
  </BigContainer>
  );
}
