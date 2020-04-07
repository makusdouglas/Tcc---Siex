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
export default function Main() {

  const eventos =[
    {
      id: 1,
      nome: "Simpósio de pesquisa e extenção 2020",
      descricao: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
      n_inscritos: 20,
      valor_inscricao: 4.99,
      data_ev_inicio: "2020-04-10",
      data_ev_fim: "2020-04-15",
      data_inscricao_inicio: "2020-03-20",
      data_inscricao_fim: "2020-04-10",

    },{
      id: 2,
      nome: "Simpósio de pesquisa e extenção 2020",
      descricao: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
      n_inscritos: 20,
      valor_inscricao: 4.99,
      data_ev_inicio: "2020-04-10",
      data_ev_fim: "2020-04-15",
      data_inscricao_inicio: "2020-03-20",
      data_inscricao_fim: "2020-04-10",

    },{
      id: 3,
      nome: "Simpósio de pesquisa, e extenção 2020",
      descricao: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
      n_inscritos: 20,
      valor_inscricao: 4.99,
      data_ev_inicio: "2020-04-10",
      data_ev_fim: "2020-04-15",
      data_inscricao_inicio: "2020-03-20",
      data_inscricao_fim: "2020-04-10",

    },{
      id: 4,
      nome: "Simpósio de pesquisa, e extenção 2020",
      descricao: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
      n_inscritos: 20,
      valor_inscricao: 4.99,
      data_ev_inicio: "2020-04-10",
      data_ev_fim: "2020-04-15",
      data_inscricao_inicio: "2020-03-20",
      data_inscricao_fim: "2020-04-10",

    },{
      id: 5,
      nome: "Simpósio de pesquisa, e extenção 2020",
      descricao: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
      n_inscritos: 20,
      valor_inscricao: 4.99,
      data_ev_inicio: "2020-04-10",
      data_ev_fim: "2020-04-15",
      data_inscricao_inicio: "2020-03-20",
      data_inscricao_fim: "2020-04-10",

    },{
      id: 6,
      nome: "Simpósio de pesquisa, e extenção 2020",
      descricao: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
      n_inscritos: 20,
      valor_inscricao: 4.99,
      data_ev_inicio: "2020-04-10",
      data_ev_fim: "2020-04-15",
      data_inscricao_inicio: "2020-03-20",
      data_inscricao_fim: "2020-04-10",

    },
  ];
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
    </Side> 
      
      <main>
        {eventos.map(evento=>(
          <>
          <Card>
          <h1>{evento.nome}</h1>
          <p id="desc">{evento.descricao}</p>
          
          <div className="showsParams" >
            <p>Valor da inscrição: </p>
          <h6>R$: {evento.valor_inscricao}</h6>
          </div>
          <div className="showsParams" >
            <p>Inscritos: </p>
            <h6> {evento.n_inscritos} </h6>
          </div>

          <div className="folder">  

            <div className= "alignColunm">
              <p id="textInfo">PERIODO DE INSCRIÇÃO: </p>
              <div className=" data">
                <p>De {evento.data_inscricao_inicio}</p>
                
                <p>á {evento.data_inscricao_fim}</p>
              </div>
            </div>


            <div className= "alignColunm">
              <p id="textInfoSec">DURAÇÃO DO EVENTO: </p>
              <div className=" data2" >
                <p>De {evento.data_ev_inicio}</p>
                <p>à {evento.data_ev_fim}</p>
              </div>
            </div>
          <button id="buttonVerMais" >Ver mais ...</button>
          </div>
        </Card>
          </>
        ))}
        
        
      </main>
    
  </Container>
  </BigContainer>
  );
}
