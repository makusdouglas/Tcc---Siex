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
  Card,
} from './styles';
import {
  BigContainer,
  MenuSup,
  DivUserAcess,
  Container, 
  Side, 
  Divisor,
  DivLink, 
  Title, 
} from '../../global/styles/styles';

// DEVELOPMENT
// import {Buttons} from '../../global/components/buttonsList';

export default function SignIn() {

  
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
  <Container>
     
    <Side>
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
    </Side> 
      
      <main>
        <Card>
          
        </Card>
        
      </main>
    
  </Container>
  </BigContainer>
  );
}
